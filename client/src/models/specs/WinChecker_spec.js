/* eslint-env mocha */
import 'babel-polyfill'

import WinChecker from '../WinChecker.js'
import Square from '../Square.js'
var assert = require('assert')

describe('WinChecker tests', function () {
  beforeEach(function () {
    // const arraySquares = []
    // for (var i = 0; i < 9; i++) {
    //   arraySquares.push(new Square(i))
    // }
    // const winChecker = new WinChecker()
  })

  it('checkAll returns false for new array at start of game', function () {
    const arraySquares = []
    for (var i = 0; i < 9; i++) {
      arraySquares.push(new Square(i))
    }
    const winChecker = new WinChecker()
    assert.strictEqual(winChecker.checkAll(arraySquares), false)
  })

  it('it displays zero initially', function () {
  })
})
