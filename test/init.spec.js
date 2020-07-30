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
  let editorContainer, editor
  describe('init()', function () {
    beforeEach(function (done) {
      editorContainer = document.createElement('div')
      editorContainer.setAttribute('id', 'freedom-editor')
      document.body.append(editorContainer)

      done()
    })

    it('should throw if defaultBlock is not defined', function (done) {
      editor = new FreedomEditor(
        {
          containerId: 'freedom-editor'
        }
      )

      expect(editor.init).to.throw()

      done()
    })

    it('should throw if defaultBlock is not registered', function (done) {
      const paragraphBlock = new Paragraph()

      editor = new FreedomEditor(
        {
          containerId: 'freedom-editor',
          defaultBlock: paragraphBlock,
          registeredBlocks: [

          ]
        }
      )

      expect(editor.init).to.throw()

      done()
    })

    it('should throw if non-array is passed to blockTemplate', function (done) {
      const paragraphBlock = new Paragraph()

      editor = new FreedomEditor(
        {
          containerId: 'freedom-editor',
          defaultBlock: paragraphBlock,
          registeredBlocks: [
            paragraphBlock
          ],
          blockTemplate: ''
        }
      )

      expect(editor.init).to.throw()

      done()
    })
  })
})
