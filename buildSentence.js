//prepositional phrase acts like an adverb
import { map, slice, ifElse, compose, toUpper, splitAt } from "ramda";
import randomAdpostion from "./buildAdpositionalPhrase.js";
import { randInt, arange, tOrF, f, getRandomFrom } from "./helpers.js";
import adverbs from "./lists/adverbs.js";

export default function() {
  function buildSentence(arr, str) {
    // a standalone independent clause is valid grammar, prepositions are not necessary
    // base case treats the root as grammatically complete
    if (arr.length <= 0) return str;
    //rule implying a prep phrase can come before or after a root. Both are grammatically correct.
    const before = tOrF();
    const current = arr[0];
    const rest = slice(1, arr.length, arr);
    const next =
      str === ""
        ? current
        : before
        ? `${current}, ${str}`
        : `${str}, ${current}`;
    return buildSentence(rest, next);
  }

  const adpositionalOrAdverb = ifElse(
    tOrF,
    randomAdpostion,
    f(getRandomFrom)(adverbs)
  );
  const adposPhrases = compose(map(adpositionalOrAdverb), arange, randInt)(7);
  const sentence = buildSentence(["this is the root", ...adposPhrases], "");
  const splitSentence = splitAt(1, sentence);
  const result = `${toUpper(splitSentence[0])}${splitSentence[1]}`;
  return result;
}
