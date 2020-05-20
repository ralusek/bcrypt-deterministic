import { expect } from 'chai';

import { hashSync } from '../../dist';

describe('hashSync invocation', () => {
  it('can be invoked with no salt', () => {
    hashSync('hello');
  });

  it('can be invoked with a salt', () => {
    hashSync('hello', { salt: 'salty' });
  });

  it('cannot be invoked without data', () => {
    let failed = false;
    try {
      // @ts-ignore;
      hashSync();
    } catch (err) {
      failed = true;
      expect(err).to.nested.include({ message: 'bcrypt.hashSync "data" must be a string.' });
    }

    expect(failed).to.be.true;
  });
});
