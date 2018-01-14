import { expect } from 'chai'
import { sum, sub, mult, div } from './../src/calc'

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist sum method', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exist sub method', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exist mult method', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })

    it('should exist div method', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(sub(6, 2)).to.equal(4)
    })

    it('should return -2 when sub(2,4)', () => {
      expect(sub(2, 4)).to.equal(-2)
    })
  })

  describe('Mult', () => {
    it('should return 10 when mult(5, 2)', () => {
      expect(mult(5, 2)).to.equal(10)
    })
  })

  describe('Div', () => {
    it('should return 2 when div(8, 4)', () => {
      expect(div(8, 4)).to.equal(2)
    })

    it('should return `Can\'t divide by 0` when div(4, 0)', () => {
      expect(div(4, 0)).to.equal('Can\'t divide by 0')
    })
  })
})
