import uslug from 'uslug';
import mocks from './mocks';
import {fastUslug} from './index';

const runTimes = 10;
const desirableRunTimes = 1000;
const testsIncreaseTimes = Math.floor(desirableRunTimes / mocks.length);
const desirableTests = Array(testsIncreaseTimes).fill(mocks).flat();

describe.skip('old-new-uslug-benchmark', () => {
  let sumFaster = 0;

  afterAll(() => {
    console.log(`In average fast-uslug ${(sumFaster / runTimes).toFixed(2)}x faster than uslug`);
  });

  for (let i = 0; i < runTimes; i++) {
    describe('old-new-uslug', () => {
      let spentTimeOld: number;
      let spentTimeNew: number;

      afterAll(() => {
        sumFaster += spentTimeOld / spentTimeNew;
      });

      it.concurrent('should old slugify', async () => {
        const startOld = +new Date();
        for (const test of desirableTests) {
          expect(uslug(test[0])).toEqual(test[1]);
        }
        const endOld = +new Date();
        spentTimeOld = endOld - startOld;
      });

      it.concurrent('should new slugify', async () => {
        const startNew = +new Date();
        for (const test of desirableTests) {
          expect(fastUslug(test[0])).toEqual(test[1]);
        }
        const endNew = +new Date();
        spentTimeNew = endNew - startNew;
      });
    });
  }
});
