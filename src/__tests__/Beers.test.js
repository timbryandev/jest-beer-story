const { expect, beforeEach } = require('@jest/globals')
const Beers = require('../Beers')

let beers;

beforeEach(() => {
  beers = new Beers(10);
})

test('getCount should return 10 beers', () => {
  expect(beers.getCount()).toBe(10)
})

test('Purchase 10 beers', () => {
  expect(beers.buy(10)).toBe(20)
})

test('Error on purchasing null beers', () => {
  expect(() => {
    beers.buy(null)
  }).toThrow()
})

test('Error on purchasing undefined beers', () => {
  expect(() => {
    beers.buy(undefined)
  }).toThrow()
})

test('Error on purchasing 0 beers', () => {
  expect(() => {
    beers.buy(0)
  }).toThrow()
})

test('Error on purchasing -1 beers', () => {
  expect(() => {
    beers.buy(-1)
  }).toThrow()
})

test('Error on purchasing infinity beers', () => {
  expect(() => {
    beers.buy(Infinity)
  }).toThrow()
})

test('Drink 5', () => {
  expect(beers.drink(5)).toBe(5)
})

test('Error on drinking null beers', () => {
  expect(() => {
    beers.drink(null)
  }).toThrow()
})

test('Error on drinking undefined beers', () => {
  expect(() => {
    beers.drink(undefined)
  }).toThrow()
})

test('Error on drinking 0 beers', () => {
  expect(() => {
    beers.drink(0)
  }).toThrow()
})

test('Error on drinking -1 beers', () => {
  expect(() => {
    beers.drink(-1)
  }).toThrow()
})

test('Error on drinking infinity beers', () => {
  expect(() => {
    beers.drink(Infinity)
  }).toThrow()
})

test('Spill 1 beer', () => {
  expect(beers.spill()).toBe(9)
})

test('Spill 100 beers still drop by 1', () => {
  expect(beers.spill(100)).toBe(9)
})

test('Spill -9 beer still drops by 1', () => {
  expect(beers.spill()).toBe(9)
})
