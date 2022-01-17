import mocks from './mocks';
import {fastUslug} from './index';

it('should return slugified strings', () => {
  for (const mock of mocks) {
    expect(fastUslug(mock[0])).toEqual(mock[1]);
  }
});

it('should return default allowed chars', () => {
  expect(fastUslug('~-_')).toEqual('~-_');
});

it('should leave passed allowed chars', () => {
  expect(fastUslug('qwerty |@ qwerty', {allowedChars: new Set(['|', '@'])})).toEqual(
    'qwerty-|@-qwerty'
  );
});

it('should not be lower cased', () => {
  expect(fastUslug('QWERTY', {lower: false})).toEqual('QWERTY');
});

it('should leave one space between words', () => {
  expect(fastUslug(' qwerty   qwerty ', {spaces: true})).toEqual('qwerty qwerty');
});
