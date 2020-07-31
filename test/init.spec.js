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

describe('FreedomEditorInstance.init()', function () {
  let editorContainer, editor
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

  describe('if defaultBlock is not defined', function () {
    it('should throw', function (done) {
      editor = new FreedomEditor({
        containerId: 'freedom-editor'
      })

      expect(editor.init).to.throw()

      done()
    })
  })

  describe('if defaultBlock is not registered', function () {
    it('should throw', function (done) {
      const paragraphBlock = new Paragraph()

      editor = new FreedomEditor({
        containerId: 'freedom-editor',
        defaultBlock: paragraphBlock,
        registeredBlocks: [

        ]
      })

      expect(editor.init).to.throw()

      done()
    })
  })

  describe('if non-array is passed to options.blockTemplate', function () {
    it('should throw', function (done) {
      const paragraphBlock = new Paragraph()

      editor = new FreedomEditor({
        containerId: 'freedom-editor',
        defaultBlock: paragraphBlock,
        registeredBlocks: [
          paragraphBlock
        ],
        blockTemplate: ''
      })

      expect(editor.init).to.throw()

      done()
    })
  })
})
