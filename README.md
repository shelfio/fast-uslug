> It was forked from [uslug](https://github.com/jeremys/uslug).

# fast-uslug [![CircleCI](https://circleci.com/gh/shelfio/fast-uslug/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/fast-uslug/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> **6x** faster than [uslug](https://github.com/jeremys/uslug).

Permissive slug generator that works with unicode.
We keep only characters from the categories Letter, Number and Separator (see [Unicode Categories](http://www.unicode.org/versions/Unicode6.0.0/ch04.pdf))
and the common [CJK Unified Ideographs](http://www.unicode.org/versions/Unicode6.0.0/ch12.pdf) as defined in the version 6.0.0 of the Unicode specification.

Inspired by [unicode-slugify](https://github.com/mozilla/unicode-slugify).
Note that this slug generator is different from [node-slug](https://github.com/dodo/node-slug) which focus on translating unicode characters to english or latin equivalent.

## Quick Examples

```js
fastUslug('Ґатунок Їхніх обценьок неперевершений!'); // 'ґатунок-їхніх-обценьок-неперевершений'
fastUslug('汉语/漢語'); // '汉语漢語'

fastUslug('Y U NO', {lower: false}); // 'Y-U-NO'
fastUslug('Y U NO', {spaces: true}); // 'y u no'
fastUslug('Y-U|NO', {allowedChars: '|'}); // 'yu|no'
```

## Install

```
$ yarn add @shelf/fast-uslug
```

## Usage

```js
import {fastUslug} from '@shelf/fast-uslug';

fastUslug('some string'); // some-string
```

## Options

### fastUslug(string, options)

Generate a slug for the string passed.

**Arguments**

- string - The string you want to slugify.
- options - An optional object that can contain:
  - allowedChars: a Set of chars that you want to be whitelisted. Default: '-\_~'.
  - lower: a Boolean to force to lower case the slug. Default: true.
  - spaces: a Boolean to allow spaces. Default: false.

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
