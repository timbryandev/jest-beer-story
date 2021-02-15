class Beers {
  constructor(startingCount) {
    this.count = startingCount
  }

  isNotNumber(value) {
    return typeof value !== 'number' || isNaN(value)
  }

  isInfinite(value) {
    return !isFinite(value)
  }

  getCount() {
    return this.count
  }

  increaseCount(value) {
    if (this.isNotNumber(value))
      throw new TypeError('value must be an integer')

    if (this.isInfinite(value)) throw new RangeError("Don't be greedy!")

    if (value >= 100 || this.count + value >= 100)
      throw new RangeError("We don't have enough stock!")

    if (value <= 0)
      throw new RangeError('You must specify one or more beers')

    this.count += value
    return this.count
  }

  decreaseCount(value) {
    if (this.isNotNumber(value))
      throw new TypeError('value must be an integer')

    if (this.isInfinite(value)) throw new RangeError('Are you mad?!')

    if (this.count - value < 0)
      throw new RangeError("There isn't enough beers to do that")

    if (value <= 0)
      throw new RangeError('You must specify one or more beers')

    this.count -= value
    return this.count
  }

  buy(quantity) {
    return this.increaseCount(quantity)
  }

  drink(quantity) {
    return this.decreaseCount(quantity)
  }

  spill() {
    return this.decreaseCount(1)
  }
}

module.exports = Beers
