//prepositional phrase acts like an adverb

function adpositPhrase(arr, str) {
  // a standalone independent clause is valid grammar, prepositions are not necessary
  // base case treats the root as grammatically complete
  if (arr.length <= 0) return str;
  //rule implying a prep phrase can come before or after a root. Both are grammatically correct.
  const before = Math.round(Math.random() * 100) % 2;
  const current = arr[0];
  const rest = arr.slice(1, arr.length);
  const next =
    str === "" ? current : before ? `${current}, ${str}` : `${str}, ${current}`;
  return adpositPhrase(rest, next);
}

//the args (with the exception of root) should be shuffled before being input into adpositPhrase
const result = adpositPhrase(
  [
    "this is the root",
    "of the sentence",
    "being typed",
    "on a computer",
    "for all to see",
    "at this moment",
    "with human language"
  ],
  ""
);
console.log(result);
