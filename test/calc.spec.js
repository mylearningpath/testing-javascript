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
})
