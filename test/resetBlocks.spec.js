const {
  FreedomEditor
} = require('../src/index.js')

const {
  Paragraph
} = require('@freedom-editor/vanilla-paragraph-block')

const jsdom = require('jsdom')
const {
  JSDOM
} = jsdom
const dom = new JSDOM('<html><body></body></html>', {
  pretendToBeVisual: true
})

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const chai = require('chai')
const expect = chai.expect

describe('FreedomEditorInstance.resetBlocks()', function () {
  let editorContainer, editor, paragraphBlock

  beforeEach(function (done) {
    paragraphBlock = new Paragraph()
    editorContainer = document.createElement('div')
    editorContainer.setAttribute('id', 'freedom-editor')
    document.body.append(editorContainer)

    done()
  })

  describe('if blocks are not listed in block template', function () {
    beforeEach(function () {
      editor = FreedomEditor({
        containerId: 'freedom-editor',
        defaultBlocks: [
          paragraphBlock
        ],
        registeredBlocks: [
          paragraphBlock
        ],
        blockTemplate: [

        ]
      })
    })

    let blocksInDOMNameList, blockTemplateBlockInstanceNameList, defaultBlockInstanceNameList

    it('should be removed except the last existing block, and all content in the last existing block will be removed', function (done) {
      editor.init([])

      const data = {
        data: [{
          type: 'Paragraph',
          data: {
            text: 'Testing'
          }
        }]
      }

      editor.renderBlock({
        blockInstance: paragraphBlock
      })

      editor.renderBlock({
        blockInstance: paragraphBlock
      })

      editor.resetBlocks()

      defaultBlockInstanceNameList = editor.options.defaultBlocks.map((blockInstance) => blockInstance.constructor.name)

      blocksInDOMNameList = [...editor.options.editorContainer.childNodes]
        .map((blockInDOM) => blockInDOM.dataset.blockType)

      expect(editor.options.editorContainer.childNodes).to.have.lengthOf(1)
      expect(blocksInDOMNameList).to.eql(defaultBlockInstanceNameList);

      // Test if block content is removed
      [...editor.options.editorContainer.childNodes].forEach((blockInDOM) => {
        blockInDOM.querySelectorAll('[contenteditable]').forEach((editableField) => {
          expect(editableField.textContent).to.have.string('')
        })
      })

      done()
    })
  })
})
