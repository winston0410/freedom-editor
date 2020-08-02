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

describe('FreedomEditorInstance.constructor', function () {
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

  describe('if containerId is not defined', function () {
    it('should throw', function (done) {
      const paragraphBlock = new Paragraph()

      const options = {

      }

      expect(() => FreedomEditor(options)).to.throw('containerId')

      done()
    })
  })

  describe('if defaultBlocks is not defined', function () {
    it('should throw', function (done) {
      const paragraphBlock = new Paragraph()

      const options = {
        containerId: 'freedom-editor',
        registeredBlocks: [
          paragraphBlock
        ]
      }

      expect(() => FreedomEditor(options)).to.throw('defaultBlocks')

      done()
    })
  })

  describe('if registeredBlocks is not defined', function () {
    it('should throw', function (done) {
      const paragraphBlock = new Paragraph()

      const options = {
        containerId: 'freedom-editor',
        defaultBlocks: [
          paragraphBlock
        ]
      }

      expect(() => FreedomEditor(options)).to.throw('registeredBlocks')

      done()
    })
  })
})
