const {
  FreedomEditor
} = require('../src/index.js')

const {
  Paragraph
} = require('@freedom-editor/vanilla-paragraph-block')

const {
  document
} = require('basichtml').init()

const chai = require('chai')
const expect = chai.expect

describe('FreedomEditorInstance', function () {
  describe('FreedomEditorInstance.loadBlocks()', function () {
    let editorContainer, editor, paragraphBlock

    beforeEach(function (done) {
      editorContainer = document.createElement('div')
      editorContainer.setAttribute('id', 'freedom-editor')
      document.body.append(editorContainer)

      paragraphBlock = new Paragraph()

      done()
    })

    afterEach(function (done) {
      editorContainer.remove()

      console.log('Remove editor')

      done()
    })

    it('should load and return defaultBlock if block template is empty and no data is passed to loadBlocks()', function (done) {
      editor.init([])

      editor.loadBlocks()

      const defaultBlockInstanceName = editor.options.defaultBlock.constructor.name

      const blocksInDOMNameList = [...editor.editor.childNodes].map((blockInDOM) => blockInDOM.dataset.blockType)

      console.log(blocksInDOMNameList)

      expect(defaultBlockInstanceName).to.eql(blocksInDOMNameList)

      done()
    })

    it('should load and return blocks listed in block template if no data is passed to loadBlocks()', function (done) {
      editor = new FreedomEditor({
        containerId: 'freedom-editor',
        defaultBlock: paragraphBlock,
        registeredBlocks: [
          paragraphBlock
        ],
        blockTemplate: [
          paragraphBlock,
          paragraphBlock
        ]
      })

      editor.init([])

      const blockInstanceNameList = editor.options.blockTemplate.map((blockInstance) => blockInstance.constructor.name)

      editor.loadBlocks()

      const blocksInDOMNameList = [...editor.editor.childNodes].map((blockInDOM) => blockInDOM.dataset.blockType)

      expect(blockInstanceNameList).to.eql(blocksInDOMNameList)

      done()
    })
  })
})
