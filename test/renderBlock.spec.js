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
chai.use(require('chai-dom'))

describe('FreedomEditorInstance.renderBlock', function () {
  let editorContainer, editor, paragraphBlock

  beforeEach(function (done) {
    paragraphBlock = new Paragraph()
    editorContainer = document.createElement('div')
    editorContainer.setAttribute('id', 'freedom-editor')
    document.body.append(editorContainer)

    editor = new FreedomEditor({
      containerId: 'freedom-editor',
      defaultBlock: [
        paragraphBlock
      ],
      registeredBlocks: [
        paragraphBlock
      ],
      blockTemplate: [

      ]
    })

    editor.init([])

    editor.loadBlocks()

    done()
  })

  it('should return the rendered element', function (done) {
    editor.options.registeredBlocks.forEach((blockInstance) => {
      const renderedBlock = editor.renderBlock({ blockInstance: blockInstance })
      expect(renderedBlock).to.match(`[data-block-type="${blockInstance.constructor.name}"]`)
      expect(editor.editor).to.contain(renderedBlock)
    })

    done()
  })

  describe('if the block to render is listed in block template', function () {
    it('should set data-block-template as true', function (done) {
      editor.options.registeredBlocks.forEach((blockInstance) => {
        const renderedBlock = editor.renderBlock({ blockInstance: blockInstance, isTemplateBlock: 'true' })
        expect(renderedBlock).to.match('[data-block-template="true"]')
      })

      done()
    })
  })

  describe('if the block to render is not listed in block template', function () {
    it('should set data-block-template as false', function (done) {
      editor.options.registeredBlocks.forEach((blockInstance) => {
        const renderedBlock = editor.renderBlock({ blockInstance: blockInstance, isTemplateBlock: 'false' })
        expect(renderedBlock).to.match('[data-block-template="false"]')
      })
      done()
    })
  })

  describe('if pass block data to it', function () {
    it('should load block data', function (done) {
      const data = {
        type: paragraphBlock.constructor.name,
        data: {
          text: 'Testing'
        }
      }

      const renderedBlock = editor.renderBlock({ blockInstance: editor.options.registeredBlocks[0], isTemplateBlock: 'false', savedData: data })

      expect(renderedBlock.querySelector('[contenteditable]')).to.have.text(data.data.text)

      done()
    })
  })
})
