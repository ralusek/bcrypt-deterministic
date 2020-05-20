import { expect } from 'chai';

import { compare, hash } from '../../dist';

describe('compare', () => {
  it('can be compared successfully with salt', async () => {
    const hashed = await hash('hello', { salt: 'salty' });
    const result = await compare('hello', hashed);

    expect(result).to.be.true;
  });

  it('can be compared with correct error with salt', async () => {
    const hashed = await hash('hello', { salt: 'salty' });
    const result = await compare('hellop', hashed);
    expect(result).to.be.false;
  });

  it('can be compared successfully with no salt', async () => {
    const hashed = await hash('hello');
    const result = await compare('hello', hashed);

    expect(result).to.be.true;
  });

  it('can be compared with correct error with no salt', async () => {
    const hashed = await hash('hello');
    const result = await compare('hellop', hashed);
    expect(result).to.be.false;
  });
});
