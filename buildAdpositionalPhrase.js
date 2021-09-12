import { includes } from "ramda";
import prepositions from "./lists/prepositions.js";
import nouns from "./longLists/longNounList2.js";
import articles from "./lists/articles.js";
import { getRandomFrom } from "./helpers.js";

const vowels = ["a", "e", "i", "o", "u"];

function buildRandomAdpostionalPhrase() {
  const preposition = getRandomFrom(prepositions);
  const noun = getRandomFrom(nouns);
  //   const article = ifElse(tOrF, f(getRandomFrom(articles)), f(""))();//it seems that articles are generally used if the noun is not proper (or pronoun?).

  const articleIsAorAn = article => article === "a" || article === "an";
  const chooseCorrectArticle = noun => (includes(noun[0], vowels) ? "an" : "a");
  const correctArticle = (article, noun) =>
    articleIsAorAn(article) ? chooseCorrectArticle(noun) : article;

  //this does not always work. It is based on the sound, not the letter. Ex. this would generate, "for an use", which is probably incorrect. SOmething similar can be said of accents. Certain english accents that ignore the "h" at a word's beginning might in reality be pronounced "with an horse"
  const article = correctArticle(getRandomFrom(articles), noun);

  return `${preposition} ${article} ${noun}`;
}

export default buildRandomAdpostionalPhrase;
