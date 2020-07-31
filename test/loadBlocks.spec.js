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
const dom = new JSDOM('<html><body></body></html>')

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const chai = require('chai')
const expect = chai.expect

describe('FreedomEditorInstance.loadBlocks()', function () {
  let editorContainer, editor, paragraphBlock

  beforeEach(function (done) {
    editorContainer = document.createElement('div')
    editorContainer.setAttribute('id', 'freedom-editor')

    document.body.append(editorContainer)
    done()
  })

  afterEach(function (done) {
    editorContainer.remove()

    done()
  })

  describe('if block template is empty', function () {
    describe('if no block data was passed to it', function () {
      let defaultBlockInstanceNameList, blocksInDOMNameList, returnedDOMElementsList

      beforeEach(function (done) {
        paragraphBlock = new Paragraph()

        editor = new FreedomEditor({
          containerId: 'freedom-editor',
          defaultBlock: paragraphBlock,
          registeredBlocks: [
            paragraphBlock
          ],
          blockTemplate: [

          ]
        })

        editor.init([])
        returnedDOMElementsList = editor.loadBlocks()
        done()
      })

      it('should load the default block in DOM', function (done) {
        if (!Array.isArray(editor.options.defaultBlock)) {
          defaultBlockInstanceNameList = editor.options.defaultBlock.constructor.name
          blocksInDOMNameList = [...editor.editor.childNodes]
            .map((blockInDOM) => blockInDOM.dataset.blockType)
            .join('')
        }

        expect(defaultBlockInstanceNameList).to.eql(blocksInDOMNameList)
        done()
      })

      it('should return DOM element of the default block', function (done) {
        if (!Array.isArray(editor.options.defaultBlock)) {
          defaultBlockInstanceNameList = editor.options.defaultBlock.constructor.name
        }

        expect(defaultBlockInstanceNameList).to.eql(returnedDOMElementsList.dataset.blockType)

        done()
      })
    })
  })

  describe('if block template is not empty', function () {
    beforeEach(function (done) {
      paragraphBlock = new Paragraph()

      editor = new FreedomEditor({
        containerId: 'freedom-editor',
        defaultBlock: paragraphBlock,
        registeredBlocks: [
          paragraphBlock
        ],
        blockTemplate: [
          paragraphBlock
        ]
      })
      done()
    })
    describe('if no block data was passed to it', function () {
      let blockTemplateBlockInstanceNameList, blocksInDOMNameList, returnedDOMElementsList

      beforeEach(function (done) {
        editor.init([])
        returnedDOMElementsList = editor.loadBlocks()
        done()
      })

      it('should load blocks listed in block template in DOM', function (done) {
        blockTemplateBlockInstanceNameList = editor.options.blockTemplate.map((blockInstance) => blockInstance.constructor.name)

        blocksInDOMNameList = [...editor.editor.childNodes].map((blockInDOM) => blockInDOM.dataset.blockType)

        expect(blockTemplateBlockInstanceNameList).to.eql(blocksInDOMNameList)

        done()
      })

      it('should return DOM elements of blocks listed in block template', function (done) {
        blockTemplateBlockInstanceNameList = editor.options.blockTemplate.map((blockInstance) => blockInstance.constructor.name)

        returnedDOMElementsList = [...returnedDOMElementsList].map((returnedDOMElement) => returnedDOMElement.dataset.blockType)

        expect(blockTemplateBlockInstanceNameList).to.eql(returnedDOMElementsList)

        done()
      })
    })

    describe('if block data was passed to it', function () {
      let blockTemplateBlockInstanceNameList, blocksInDOMNameList, returnedDOMElementsList
      beforeEach(function (done) {
        editor.init([])

        const data = {
          data: [
            {
              type: 'Paragraph',
              data: {
                text: 'Testing'
              }
            }
          ]
        }

        returnedDOMElementsList = editor.loadBlocks(data)

        done()
      })

      it('should load blocks listed in block template in DOM', function (done) {
        blockTemplateBlockInstanceNameList = editor.options.blockTemplate.map((blockInstance) => blockInstance.constructor.name)

        blocksInDOMNameList = [...editor.editor.childNodes].map((blockInDOM) => blockInDOM.dataset.blockType)

        expect(blockTemplateBlockInstanceNameList).to.eql(blocksInDOMNameList)

        done()
      })

      it('should return DOM elements of blocks listed in data passed to it', function (done) {
        blockTemplateBlockInstanceNameList = editor.options.blockTemplate.map((blockInstance) => blockInstance.constructor.name)

        returnedDOMElementsList = [...returnedDOMElementsList].map((returnedDOMElement) => returnedDOMElement.dataset.blockType)

        expect(blockTemplateBlockInstanceNameList).to.eql(returnedDOMElementsList)

        done()
      })
    })
  })
})
