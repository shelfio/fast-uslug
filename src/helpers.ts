import {LMN, Z} from './codes/index.js';
import {
  chineseL,
  chineseR,
  emptyString,
  japaneseLL,
  japaneseLR,
  japaneseRL,
  japaneseRR,
  koreanL,
  koreanR,
  lmnSymbol,
  spaceSymbol,
  zSymbol,
} from './consts.js';

export const getRawSlug = (chars: string, allowedChars: Set<string>): string => {
  const rawSlug = [];

  for (const char of chars) {
    const code = char.charCodeAt(0);

    if (allowChinese(code) || allowKorean(code)) {
      rawSlug.push(char);
      continue;
    }

    if (allowJapanese(code)) {
      rawSlug.push(spaceSymbol);
    }

    if (allowedChars.has(char)) {
      rawSlug.push(char);
      continue;
    }

    const value = unicodeCategory(code);

    if (!value) {
      continue;
    }

    rawSlug.push(value === lmnSymbol ? char : spaceSymbol);
  }

  return rawSlug.join(emptyString).trim();
};

// Allow Common CJK Unified Ideographs
// See: http://www.unicode.org/versions/Unicode6.0.0/ch12.pdf - Table 12-2
function allowChinese(code: number): boolean {
  return chineseL <= code && code <= chineseR;
}

// Allow Hangul
function allowKorean(code: number): boolean {
  return koreanL <= code && code <= koreanR;
}

// Japanese ideographic punctuation
function allowJapanese(code: number): boolean {
  return (japaneseLL <= code && code <= japaneseLR) || (japaneseRL <= code && code <= japaneseRR);
}

function unicodeCategory(code: number): undefined | number {
  if (LMN.has(code)) {
    return lmnSymbol;
  }

  if (Z.has(code)) {
    return zSymbol;
  }
}
