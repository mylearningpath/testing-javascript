const expect = require('chai').expect
const calc = require('./../src/calc')

describe('Calc', function () {
  describe('Smoke tests', function () {
    it('should exist calc lib', function () {
      expect(calc).to.exist
    })

    it('should exist sum method', function () {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a('function')
    })

    it('should exist sub method', function () {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a('function')
    })

    it('should exist mult method', function () {
      expect(calc.mult).to.exist
      expect(calc.mult).to.be.a('function')
    })

    it('should exist div method', function () {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a('function')
    })
  })

  describe('Sum', function () {
    it('should return 4 when sum(2,2)', function () {
      expect(calc.sum(2, 2)).to.equal(4)
    })
  })

  describe('Sub', function () {
    it('should return 4 when sub(6,2)', function () {
      expect(calc.sub(6, 2)).to.equal(4)
    })

    it('should return -2 when sub(2,4)', function () {
      expect(calc.sub(2, 4)).to.equal(-2)
    })
  })

  describe('Mult', function () {
    it('should return 10 when mult(5, 2)', function () {
      expect(calc.mult(5, 2)).to.equal(10)
    })
  })

  describe('Div', function () {
    it('should return 2 when div(8, 4)', function () {
      expect(calc.div(8, 4)).to.equal(2)
    })

    it('should return `Can\'t divide by 0` when div(4, 0)', function () {
      expect(calc.div(4, 0)).to.equal('Can\'t divide by 0')
    })
  })
})
