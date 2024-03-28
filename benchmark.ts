import benny from 'benny';
// @ts-ignore
import fLI from 'fast-lorem-ipsum';
// eslint-disable-next-line no-restricted-imports
import uslug from 'uslug';
import {fastUslug} from './lib';

const words10 = fLI(10, 'w');
const words100 = fLI(100, 'w');
const words1000 = fLI(1000, 'w');

benny.suite(
  '@shelf/fast-uslug',
  benny.add('10 words', () => {
    fastUslug(words10);
  }),
  benny.add('100 words', () => {
    fastUslug(words100);
  }),
  benny.add('1000 words', () => {
    fastUslug(words1000);
  }),
  benny.cycle(),
  benny.complete()
);

benny.suite(
  'uslug',
  benny.add('10 words', () => {
    uslug(words10);
  }),
  benny.add('100 words', () => {
    uslug(words100);
  }),
  benny.add('1000 words', () => {
    uslug(words1000);
  }),
  benny.cycle(),
  benny.complete()
);
