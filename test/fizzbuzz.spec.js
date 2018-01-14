/*
Desafio FIZZBUZZ

Escreva uma lib que receba um número e:

- Se o número for divisível por 3, print no console 'Fizz'
- Se o número for divisível por 5, print no console 'Buzz'
- Se o número for divisível por 3 e 5, print no console 'FizzBuzz'
- Se não for multiplo de 3 e 5, print o número
- Se o número for 0, print 0

*/

import { expect } from 'chai'
import fizzBuzz from './../src/fizz-buzz'

describe('FizzBuzz', () => {
  it('FizzBuzz should exist', () => {
    expect(fizzBuzz).to.exist
    expect(fizzBuzz).to.be.a('function')
  })

  it('should return `Fizz` if multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz')
    expect(fizzBuzz(6)).to.be.equal('Fizz')
  })

  it('should return `Buzz` if multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz')
  })

  it('should return `FizzBuzz` if multiple of 3 & 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz')
  })

  it('should return number if not multiple of 3 or 5', () => {
    expect(fizzBuzz(7)).to.be.equal(7)
  })

  it('should return 0 if 0', () => {
    expect(fizzBuzz(0)).to.be.equal(0)
  })
})
