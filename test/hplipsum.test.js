require('chai').should();
const hplipsum = require('../src/hplipsum');

describe('HPLipsum generator', () => {
  it('should be testable', () => {
    true.should.be.true;
  });
  it('should generate some text', () => {
    const text = hplipsum();
    text.length.should.be.greaterThan(100);
    text.split(' ').length.should.be.greaterThan(99);
  });
  it('should take minimum word length parameters', () => {
    const text = hplipsum(10);
    text.split(' ').length.should.be.greaterThan(9);
    text.split('\n\n').length.should.equal(1);
  });
  it('should take number of paragraphs parameters', () => {
    const text = hplipsum(50, 5);
    text.split('\n\n').length.should.equal(5);
  })
});
