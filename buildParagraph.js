import buildSentence from "./buildSentence.js";
import { arange, randInt } from "./helpers.js";
import { map, join, compose } from "ramda";

const paragraph =
  compose(join(".  "), map(buildSentence), arange, randInt)(10) + ".  ";
console.log(paragraph);
