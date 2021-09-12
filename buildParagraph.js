import buildSentence from "./buildSentence.js";
import { arange, randInt } from "./helpers.js";
import { map, join, compose } from "ramda";

export default () =>
  "  " + compose(join(".  "), map(buildSentence), arange, randInt)(10) + "!  ";
