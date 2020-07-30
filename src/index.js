const {
  shiftBlockFocus,
  shiftFieldFocus,
  moveBlock,
  getRegisteredBlocksNameList,
  getBlockInstancesListFromDOM
} = require('./utilities/helper.js')

class FreedomEditor {
  /**
   * Construct Freedom Editor instance
   * @author Hugo Sum
   * @lastUpdateDate 2020-07-16
   * @param          {object}   customOptions An object with options to initialize Freedom Editor instance
   */
  constructor (customOptions) {
    /**
     * Default options for Freedom Editor instance
     * @type {Object}
     * @property {[String]} containerId The id of the container for Freedom Editor instance
     * @property {[Array]} blockTemplate An array of block instances.  Blocks listed here will be rendered as template when the editor initialize, and their position will be fixed.
     * @property {[Array]} registeredBlocks An array of block instances to be registered in this editor instance.
     * @property {[Array]} blocksControllers Blocks controllers listed here will be applied to all blocks in this editor instance.  You should pass this array through FreedomEditor.init() instead of here.
     * @property {[Object]} i18n An Object of internationalization options.  Default "locale" is "en-US" and "rtl" is "auto"
     */
    const defaultOptions = {
      containerId: 'freedom-editor',
      i18n: {
        locale: 'en-US',
        rtl: 'auto'
      }
    }

    if (customOptions !== undefined && typeof customOptions !== 'object') {
      throw new Error('You can only pass an object as constructor options for FreedomEditor')
    }

    // Ensure no duplicate values in registeredBlocks
    customOptions.registeredBlocks = [...new Set(customOptions.registeredBlocks)]

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  /**
   * Initialize editor and hook controllers to the editor in editor level.  controllers hooked here will apply to all blocks.
   * @param  {Array} controllersOptions An array containing all init functions of controllers
   * @return {Object} The instance of Freedom Editor
   */
  init (controllersOptions) {
    this.editor = document.getElementById(this.options.containerId)

    if (this.editor === null) {
      throw new Error('No DOM element can be found with the given ID for editor container.')
    }

    this.editor.setAttribute('dir', this.options.i18n.rtl)
    if (!this.options.defaultBlock) {
      throw new Error('DefaultBlock must be defined when you initiate new editor.')
    }

    if (!this.options.registeredBlocks.includes(this.options.defaultBlock)) {
      throw new Error('You need to register your options.defaultBlock at options.registeredBlocks')
    }

    if (this.options.blockTemplate) {
      if (Array.isArray(this.options.blockTemplate) !== true) {
        throw new Error('You need to pass an array as value for options.blockTemplate')
      }

      this.options.blockTemplate.forEach((blockInstance) => {
        if (!this.options.registeredBlocks.includes(blockInstance)) {
          throw new Error('You need to register blocks used in your block template at ptions.registeredBlocks.')
        }
      })
    }

    if (Array.isArray(controllersOptions) !== true) {
      throw new Error('You need to pass an array to init')
    }

    this.options.blocksControllers = controllersOptions

    return this.editor
  }

  /**
   * Call render() from blocks and Render block in the DOM
   * @author Hugo Sum
   * @lastUpdateDate 2020-07-18
   * @param          {Object}   blockInstance      A class instance of a block registered at Freedom Editor's instance
   * @param          {Boolean}  isTemplateBlock    True for rendering template block, false for rendering non-template block
   * @param          {Object}   savedData          An object of data generated by save() method of a block instance
   * @return {[DOMString]} newBlock  Rendered block DOM string
   */
  renderBlock (blockInstance, isTemplateBlock, savedData) {
    if (blockInstance === undefined) {
      throw new Error('Block object is not passed to renderBlock()')
      return
    }

    // Assign order attribute to new block
    const newBlock = blockInstance.render(this.options.i18n, savedData)
    newBlock.dataset.order = this.editor.childNodes.length
    if (isTemplateBlock === 'true') {
      newBlock.dataset.blockTemplate = true
    } else {
      newBlock.dataset.blockTemplate = false
    }

    const mergedControllers = this.options.blocksControllers.map((controllerForAllBlocks) => {
      const controllerToCopyFrom = blockInstance.options.controllers.find((controllerForSpecificBlock) => controllerForAllBlocks.constructor.name === controllerForSpecificBlock.constructor.name)
      return Object.assign(controllerForAllBlocks, controllerToCopyFrom)
    })

    mergedControllers.forEach((controller) => {
      controller.init(this, newBlock)
    })

    this.editor.append(newBlock)

    return newBlock
  }

  /**
   * Remove a specific block from editor
   * @param  {Object} block Block to be removed
   * @return {undefined}
   */
  removeBlock (block) {
    if (block.matches('[data-block-template="true"]') || this.editor.childNodes.length === 1) {
      return
    }

    if (block !== this.editor.firstElementChild) {
      this.shiftBlockFocus(block, 'up', block.previousElementSibling)
    } else {
      // Shift focus down if the removing the first block
      this.shiftBlockFocus(block, 'down', block.nextElementSibling)
    }

    block.remove()
  }

  /**
   * Load blocks with data saved previously
   * @param  {Object} savedData Data you saved with saveBlocks(). If you don't pass any saved Data here, blocks listed in block template will be loaded.
   * @return {Array} Blocks loaded in editor instance
   */
  loadBlocks (savedData) {
    if (!savedData) {
      if (this.options.blockTemplate.length > 0) {
        return this.options.blockTemplate.map((block) => this.renderBlock(block, 'true'))
      }
      return this.renderBlock(this.options.defaultBlock, 'false')
    }

    return savedData.data.map((block) => {
      const blockIndexInRegisteredBlockList = getRegisteredBlocksNameList(this).indexOf(block.type)

      if (blockIndexInRegisteredBlockList === -1) {
        throw new Error("You are trying to load a block that you haven't registered when you initzalize the editor")
      }

      // TODO: Fix bug where a block is template or not is not shown in the saved JSON data, thus the loaded block
      return this.renderBlock(this.options.registeredBlocks[blockIndexInRegisteredBlockList], block.isTemplateBlock, block)
    })
  }

  /**
   * Save data from all blocks
   * @return {Object} An object containing datas of all blocks and saving timestamp
   */
  saveBlocks () {
    // Get block list in editor in DOM
    const blocksInDOM = [...this.editor.childNodes]

    const data = blocksInDOM
      .map((blockInDom, index) => getBlockInstancesListFromDOM(this)[index].save(blockInDom))
      .filter(
        blockData => blockData !== (false || undefined)
      )

    return {
      timestamp: Date.now(),
      data: data
    }
  }

  /**
   * Reset editor and only keeps its template block
   */
  resetBlocks () {
    [...this.editor.childNodes].forEach((block) => {
      if (!block.matches('[data-block-template="true"]')) {
        block.remove()
      } else {
        block.querySelectorAll('[contenteditable]')
          .forEach((editableField) => {
            editableField.textContent = ''
          })
      }
    })

    if (this.editor.childNodes.length === 0) {
      this.renderBlock(this.options.defaultBlock, false, null)
    }
  }
}

FreedomEditor.prototype.shiftFieldFocus = shiftFieldFocus
FreedomEditor.prototype.shiftBlockFocus = shiftBlockFocus
FreedomEditor.prototype.moveBlock = moveBlock

module.exports = {
  FreedomEditor
}
