const Markov = require('./Markov');
const chain = require('./chain');
const defaultParagraphs = 1;
const defaultWords = 100;

module.exports = function hplipsum(wcount = defaultWords, pcount = defaultParagraphs) {
  return Markov.generateText({ chain, pcount, wcount }).join('\n\n');
}
