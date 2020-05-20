import { expect } from 'chai';

import { hash, hashSync } from '../../dist';

describe('work factor', () => {
  it('time to compute increases as work factor increases', async () => {
    const time1Start = Date.now();
    await hash('hello', { rounds: 2});
    const time1 = Date.now() - time1Start;
    
    const time2Start = Date.now();
    await hash('hello', { rounds: 10 });
    const time2 = Date.now() - time2Start;

    const time3Start = Date.now();
    await hash('hello', { rounds: 15 });
    const time3 = Date.now() - time3Start;

    expect(time1).to.be.lessThan(time2);
    expect(time2).to.be.lessThan(time3);
  });

  it('time to compute increases as work factor increases sync', async () => {
    const time1Start = Date.now();
    await hashSync('hello', { rounds: 2});
    const time1 = Date.now() - time1Start;
    
    const time2Start = Date.now();
    await hashSync('hello', { rounds: 10 });
    const time2 = Date.now() - time2Start;

    const time3Start = Date.now();
    await hashSync('hello', { rounds: 15 });
    const time3 = Date.now() - time3Start;

    expect(time1).to.be.lessThan(time2);
    expect(time2).to.be.lessThan(time3);
  });
});
