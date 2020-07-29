const {
  FreedomEditor
} = require('../src/index.js')

const { document } = require('basichtml').init()

const chai = require('chai')
const expect = chai.expect

describe('FreedomEditorInstance.init()', function () {
  beforeEach(function () {
    const editorContainer = document.createElement('div')
    editorContainer.id = 'freedom-editor'

    const editor = new FreedomEditor(
      {
        containerId: 'freedom-editor'
      }
    )

    return editor
  })

  it('should throw if defaultBlock is not defined', function () {
    expect(editor.init()).to.throw()

    done()
  })

  /* it('should throw if defaultBlock is not registered', function () {

  })

  it('should throw if non-array is passed to blockTemplate', function () {

  }) */
})
