module.exports = {
  generateText(args) {
    const { chain, pcount, wcount } = args;
    if (chain._seeds) {
      let paragraphs = [];
      for (let i = 0; i < pcount; i++) {
        paragraphs.push(this.generateParagraph(chain, wcount));
      }
      return paragraphs;
    }
    return ['Loading...'];
  },
  generateParagraph(chain, numWords) {
    const text = this.select(chain._seeds).slice(0);
    let [w1, w2] = text;
    for (
      let i = 0;
      i < numWords ||
      text[text.length - 1][text[text.length - 1].length - 1] !== '.';
      i++
    ) {
      const w3 = this.getNextWord(chain, w1, w2);
      if (typeof w3 === 'string') {
        text.push(w3);
        [w1, w2] = [w2, w3];
      } else {
        text.push(w3[0]);
        text.push(w3[1]);
        [w1, w2] = w3;
      }
    }
    return text.join(' ');
  },
  getNextWord(chain, w1, w2) {
    if (chain[w1] === undefined || chain[w1][w2] === undefined) {
      return this.select(chain._seeds);
    }
    return this.select(chain[w1][w2]);
  },
  select(arr) {
    return arr ? arr[Math.floor(Math.random() * arr.length)] : '.';
  },
  indexWords(chain, words) {
    if (!chain._seeds) {
      chain._seeds = [];
    }
    chain._seeds.push([words[0], words[1]]);

    for (let i = 0; i < words.length - 2; i++) {
      const [w1, w2, w3] = [words[i], words[i + 1], words[i + 2]];
      if (!(w1 in chain)) {
        chain[w1] = {};
      }
      if (!(w2 in chain[w1])) {
        chain[w1][w2] = [];
      }
      chain[w1][w2].push(w3);
    }
  },
};
