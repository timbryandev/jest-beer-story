const Beers = require('./src/Beers')
const beers = new Beers(10);

function tellStory(){
  console.log(`I start the night with ${beers.getCount()} beers!`)
  beers.drink(7)
  console.log(`I drank seven and needed a restroom break , leaving me with ${beers.getCount()} beers!`)
  beers.drink(2)
  console.log(`I drank two more, leaving me with ${beers.getCount()} beer!`)
  beers.spill()
  console.log(`Blast - I dropped my last one, now I have ${beers.getCount()} beers... better get some more!`)
  beers.buy(10)
  console.log(`[giddy laughter]: After buying five more, I have ${beers.getCount()} beers again!`)
}

console.log("The story of Tim's big night out:")
console.log("---")
tellStory()
console.log("---")
console.log("The end :D")