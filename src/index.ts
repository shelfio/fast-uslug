import {
  defaultAllowedChars,
  emptyString,
  hyphenSymbol,
  normalizeForm,
  severalSpacesOrHyphensRegex,
  severalSpacesRegex,
  spaceSymbol,
} from './consts.js';
import {getRawSlug} from './helpers.js';

type OptionParams = {lower?: boolean; spaces?: boolean; allowedChars?: Set<string>};

export const fastUslug = (
  str: string = emptyString,
  {lower = true, spaces = false, allowedChars = defaultAllowedChars}: OptionParams = {}
): string => {
  const chars = str.normalize(normalizeForm);
  const rawSlug = getRawSlug(chars, allowedChars);

  let slug = rawSlug.replace(severalSpacesRegex, spaceSymbol);

  if (!spaces) {
    slug = slug.replace(severalSpacesOrHyphensRegex, hyphenSymbol);
  }

  if (lower) {
    slug = slug.toLowerCase();
  }

  return slug;
};
