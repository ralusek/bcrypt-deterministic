import { expect } from 'chai';

import { compareSync, hashSync } from '../../dist';

describe('compare', () => {
  it('can be compared successfully with salt', () => {
    const hashed = hashSync('hello', { salt: 'salty' });
    const result = compareSync('hello', hashed);

    expect(result).to.be.true;
  });

  it('can be compared with correct error with salt', () => {
    const hashed = hashSync('hello', { salt: 'salty' });
    const result = compareSync('hellop', hashed);
    expect(result).to.be.false;
  });

  it('can be compared successfully with no salt', () => {
    const hashed = hashSync('hello');
    const result = compareSync('hello', hashed);

    expect(result).to.be.true;
  });

  it('can be compared with correct error with no salt', () => {
    const hashed = hashSync('hello');
    const result = compareSync('hellop', hashed);
    expect(result).to.be.false;
  });
});
