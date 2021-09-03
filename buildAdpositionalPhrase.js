import { ifElse } from "ramda";
import prepositions from "./lists/prepositions.js";
import nouns from "./lists/nouns/nouns.js";
import articles from "./lists/articles.js";
import { getRandomFrom, tOrF, f } from "./helpers.js";

function buildRandomAdpostionalPhrase() {
  const preposition = getRandomFrom(prepositions);
  const noun = getRandomFrom(nouns);
  //   const article = ifElse(tOrF, f(getRandomFrom(articles)), f(""))();//it seems that articles are generally used if the noun is not proper (or pronoun?).
  const article = getRandomFrom(articles);
  return `${preposition} ${article} ${noun}`;
}

export default buildRandomAdpostionalPhrase;
