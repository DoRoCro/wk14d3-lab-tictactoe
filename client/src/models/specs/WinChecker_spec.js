/* eslint-env mocha */
import 'babel-polyfill'

import WinChecker from '../WinChecker.js'
import Square from '../Square.js'
var assert = require('assert')

describe('WinChecker tests', function () {
  beforeEach(function () {
    // deosn't seem to work
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

  it('checkAll returns true for column', function () {
    const arraySquares = []
    for (var i = 0; i < 9; i++) {
      arraySquares.push(new Square(i))
    }
    arraySquares[0].played = true
    arraySquares[0].value = 'X'
    arraySquares[1].played = true
    arraySquares[1].value = 'X'
    arraySquares[2].played = true
    arraySquares[2].value = 'X'

    const winChecker = new WinChecker()
    assert.strictEqual(winChecker.checkColumns(arraySquares), true)
    assert.strictEqual(winChecker.checkAll(arraySquares), true)
  })
  it('checkDraw returns false for incomplete game', function () {
    const arraySquares = []
    for (var i = 0; i < 9; i++) {
      arraySquares.push(new Square(i))
    }
    arraySquares[0].played = true
    arraySquares[0].value = 'X'
    arraySquares[1].played = true
    arraySquares[1].value = 'X'
    arraySquares[2].played = true
    arraySquares[2].value = 'X'

    const winChecker = new WinChecker()
    assert.strictEqual(winChecker.checkDraw(arraySquares), false)
  })
  it('checkDraw returns true for drawn game', function () {
    const arraySquares = []
    for (var i = 0; i < 9; i++) {
      arraySquares.push(new Square(i))
    }
    arraySquares[0].played = true
    arraySquares[0].value = 'X'
    arraySquares[1].played = true
    arraySquares[1].value = 'O'
    arraySquares[2].played = true
    arraySquares[2].value = 'X'
    arraySquares[3].played = true
    arraySquares[3].value = 'X'
    arraySquares[4].played = true
    arraySquares[4].value = 'O'
    arraySquares[5].played = true
    arraySquares[5].value = 'X'
    arraySquares[6].played = true
    arraySquares[6].value = 'O'
    arraySquares[7].played = true
    arraySquares[7].value = 'X'
    arraySquares[8].played = true
    arraySquares[8].value = 'O'

    const winChecker = new WinChecker()
    assert.strictEqual(winChecker.checkDraw(arraySquares), true)
    assert.strictEqual(winChecker.checkAll(arraySquares), false)
  })
})
