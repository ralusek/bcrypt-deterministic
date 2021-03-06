import { expect } from 'chai';

import { hash } from '../../dist';

describe('salts', () => {
  it('produces different hashes with same input if invoked without a salt', async () => {
    const hash1 = await hash('hello');
    const hash2 = await hash('hello');

    expect(hash1).to.not.equal(hash2);
  });

  it('produces identical hashes with the same input if invoked with a salt', async () => {
    const hash1 = await hash('hello', { salt: 'salty' });
    const hash2 = await hash('hello', { salt: 'salty' });

    expect(hash1).to.equal(hash2);
  });
});
