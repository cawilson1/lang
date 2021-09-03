//prepositional phrase acts like an adverb
import { map, slice, ifElse } from "ramda";
import randomAdpostion from "./buildAdpositionalPhrase.js";
import { randInt, arange, tOrF, f, getRandomFrom } from "./helpers.js";
import adverbs from "./lists/adverbs.js";

function buildSentence(arr, str) {
  // a standalone independent clause is valid grammar, prepositions are not necessary
  // base case treats the root as grammatically complete
  if (arr.length <= 0) return str;
  //rule implying a prep phrase can come before or after a root. Both are grammatically correct.
  const before = tOrF();
  const current = arr[0];
  const rest = slice(1, arr.length, arr);
  const next =
    str === "" ? current : before ? `${current}, ${str}` : `${str}, ${current}`;
  return buildSentence(rest, next);
}

const adpositionalOrAdverb = ifElse(
  tOrF,
  randomAdpostion,
  f(getRandomFrom)(adverbs)
);

const adposPhrases = map(adpositionalOrAdverb, arange(randInt(7)));
const result = buildSentence(["this is the root", ...adposPhrases], "");
console.log(result);
