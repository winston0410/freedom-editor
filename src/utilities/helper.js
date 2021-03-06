/**
 * Shift users' focus from one field to another
 * @author Hugo Sum
 * @lastUpdateDate 2020-07-16
 * @param          {DOMString}   fieldToFocus Field you want the user to focus
 * @return         {Void}
 */
const shiftFieldFocus = (fieldToFocus) => {
  fieldToFocus.focus()
  if (fieldToFocus.firstChild !== null) {
    window.getSelection().collapse(fieldToFocus.firstChild, fieldToFocus.firstChild.length)
  }
}

/**
 * Shift users' focus from one block to another
 * @param  {DOMString} currentBlock   The block(not contenteditable fields) that has users' focused
 * @param  {String} shiftDirection Direction for shifting focus, accepts "up" or "down"
 * @param  {DOMString} blockToFocus   The block that you want to shift users' focus to.
 */
const shiftBlockFocus = (currentBlock, shiftDirection, blockToFocus) => {
  const currentBlockEditableFieldList = [...currentBlock.querySelectorAll('[contenteditable]')]
  const focusedFieldIndex = currentBlockEditableFieldList.indexOf(document.activeElement)
  const hasMultipleFields = (focusedFieldIndex !== 0 && focusedFieldIndex !== currentBlockEditableFieldList.length - 1)

  // if block has multiple fields
  if (hasMultipleFields) {
    switch (shiftDirection) {
      case 'up':
        shiftFieldFocus(currentBlockEditableFieldList[focusedFieldIndex - 1])
        break

      case 'down':
        shiftFieldFocus(currentBlockEditableFieldList[focusedFieldIndex + 1])
        break

      default:
    }

    return
  }

  // Does not have multiple fields
  const nextBlockEditableFieldList = blockToFocus.querySelectorAll('[contenteditable]')

  switch (shiftDirection) {
    case 'up':
      shiftFieldFocus(nextBlockEditableFieldList[nextBlockEditableFieldList.length - 1])
      break

    case 'down':
      shiftFieldFocus(nextBlockEditableFieldList[0])
      break

    default:
  }
}

/**
 * Check if there is valid block to be swapped with block you want to move up or down
 * @author Hugo Sum
 * @lastUpdateDate 2020-07-19
 * @param          {DOMString}   blockToCheck Block to be swapped with the block you want to move
 * @return         {Boolean}               True if the checked block exists and it is not a template block
 */
const isSwappingBlockPossible = (blockToCheck) => {
  if (!blockToCheck) {
    return false
  }

  if (blockToCheck.matches('[data-block-template="true"]')) {
    return false
  }

  return true
}

/**
 * Move a block up or down
 * @param  {DOMString} blockToMove Block you want to move
 * @param  {String} direction   Direction to move the block, accept 'up' or 'down'
 * @return {Void}             [description]
 */
const moveBlock = (blockToMove, direction) => {
  if (blockToMove.matches('[data-block-template="true"]')) {
    return
  }
  switch (direction) {
    case 'up':

      if (isSwappingBlockPossible(blockToMove.previousElementSibling)) {
        blockToMove.previousElementSibling.before(blockToMove)
      }

      break

    case 'down':
      if (isSwappingBlockPossible(blockToMove.nextElementSibling)) {
        blockToMove.nextElementSibling.after(blockToMove)
      }

      break

    default:
  }
}

const getRegisteredBlocksNameList = (options) => {
  return options.registeredBlocks.map((registeredBlock) => {
    return registeredBlock.constructor.name
  })
}

/**
 * Return an array of block instances of blocks currently in DOM
 * @param  {Class} editorInstance An instance of the editor
 * @return {Array}                an array of block instances of blocks currently in DOM
 */
const getBlockInstancesListFromDOM = (options) => {
  const registeredBlockList = getRegisteredBlocksNameList(options)

  // Return list of Block instance, so that we can assign specific save() funciton for each block
  return [...options.editorContainer.childNodes]
    .map((block) => {
      const indexInRegisteredBlockList = registeredBlockList.indexOf(block.dataset.blockType)
      if (indexInRegisteredBlockList !== -1) {
        return options.registeredBlocks[indexInRegisteredBlockList]
      }
    })
}

const requiredParam = (param) => {
  const requiredParamError = new Error(`Required parameter, "${param}" is missing.`)
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(requiredParamError, requiredParam)
  }
  throw requiredParamError
}

module.exports = {
  shiftBlockFocus,
  shiftFieldFocus,
  moveBlock,
  getRegisteredBlocksNameList,
  getBlockInstancesListFromDOM,
  requiredParam
}
