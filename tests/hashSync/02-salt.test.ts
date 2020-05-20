import { expect } from 'chai';

import { hashSync } from '../../dist';

describe('salts', () => {
  it('produces different hashes with same input if invoked without a salt', () => {
    expect(hashSync('hello')).to.not.equal(hashSync('hello'));
  });

  it('produces identical hashes with the same input if invoked with a salt', () => {
    expect(hashSync('hello', { salt: 'salty' })).to.equal(hashSync('hello', { salt: 'salty' }));
  });
});
