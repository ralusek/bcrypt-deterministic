import { expect } from 'chai';

import { hash } from '../../dist';

describe('hash invocation', () => {
  it('can be invoked with no salt', async () => {
    await hash('hello');
  });

  it('can be invoked with a salt', async () => {
    await hash('hello', { salt: 'salty' });
  });

  it('cannot be invoked without data', async () => {
    let failed = false;
    // @ts-ignore;
    await hash()
    .catch(err => {
      failed = true;
      expect(err).to.nested.include({ message: 'bcrypt.hash "data" must be a string.' });
    });

    expect(failed).to.be.true;
  });
});
