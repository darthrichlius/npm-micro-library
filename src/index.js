var almostUniqueRandomArray = require("./lib/almost-unique-random-array");
var starWarsNames = require("../data/starwars-names.json");

module.exports = {
  all: starWarsNames,
  random: almostUniqueRandomArray(starWarsNames),
};
