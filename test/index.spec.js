const {
  FreedomEditor
} = require('../src/index.js')

const { document } = require('basichtml').init()

const chai = require('chai')
const expect = chai.expect

describe('FreedomEditorInstance.init()', function () {
  beforeEach(function () {
    const editor = new FreedomEditor(
      {

      }
    )
  })

  it('should throw if defaultBlock is not defined', function () {
    expect(editor.init()).to.throw()
  })

  /* it('should throw if defaultBlock is not registered', function () {

  })

  it('should throw if non-array is passed to blockTemplate', function () {

  }) */
})
