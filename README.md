# HPLipsum
## A _lorem ipsum_ generator based on the works of weird fiction author H.P. Lovecraft.

HPLipsum uses a simple Markov chain derived from a number of H.P. Lovecraft stories to generate new, random Lovecraftian texts with a specified number of paragraphs, and minimum number of words per paragraph. 

## Usage

```js
hplipsum([minWords, [minParagraphs]])
```

```js
const hplipsum = require('hplipsum');
const text = hplipsum();  // One paragraph, minimum 100 words default
const text = hplipsum(10);  // One paragraph, minimum 10 words default
const text = hplipsum(50, 5);  // Five paragraphs, minimum 50 words default
```

## Corpus

The generator draws from the following texts, which are unaltered save the substitution of "fella" for a certain word, and a few formatting adjustments. 

* At the Mountains of Madness
* The Call of Cthulhu
* The Case of Charles Dexter Ward
* The Colour Out of Space
* Cool Air
* Dagon
* The Dream-Quest of Unknown Kadath
* The Dunwich Horror
* From Beyond
* The Haunter of the Dark
* The Lurking Fear
* Nyarlathotep
* The Outsider
* The Picture in the House
* The Shadow Uut of Time
* The Shadow Over Innsmouth
* The Festival
* The Temple
* The Thing on the Doorstep
* The Whisperer in Darkness

## Web Generator

If you find this package useful, please visit us at http://hplipsum.com/
