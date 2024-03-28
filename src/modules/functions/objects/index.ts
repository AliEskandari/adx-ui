import { mergeWith, isArray } from "lodash";

export const merge = <T, V>(object: T, source: V) => {
  return mergeWith(object, source, (a, b) => (isArray(b) ? b : undefined));
};
