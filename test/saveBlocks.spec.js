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
const dom = new JSDOM('<html><body></body></html>', { pretendToBeVisual: true })

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-deep-match'))

describe('FreedomEditorInstance.saveBlocks()', function () {
  let editorContainer, editor, paragraphBlock

  beforeEach(function (done) {
    paragraphBlock = new Paragraph()
    editorContainer = document.createElement('div')
    editorContainer.setAttribute('id', 'freedom-editor')
    document.body.append(editorContainer)

    editor = FreedomEditor({
      containerId: 'freedom-editor',
      defaultBlocks: [
        paragraphBlock
      ],
      registeredBlocks: [
        paragraphBlock
      ]
    })

    editor.init([])

    editor.loadBlocks()

    done()
  })

  afterEach(function (done) {
    editorContainer.remove()

    done()
  })

  it('should return data of block as an object', function () {
    [...editor.options.editorContainer.childNodes].forEach((blockInDom) => {
      blockInDom.querySelector('[contenteditable]').textContent = 'Testing'

      const expectedData =
          {
            data: [
              {
                type: paragraphBlock.constructor.name,
                data: {
                  text: 'Testing'
                }
              }
            ]
          }

      expect(editor.saveBlocks()).to.be.an('object')
      expect(editor.saveBlocks()).to.deep.match(expectedData)
    })
  })

  describe('if a block does not contain data', function () {
    it('should not save that block in return object', function () {

    })
  })
})
