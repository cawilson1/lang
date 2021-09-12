import buildParagraph from "./buildParagraph.js";
import { arange, randInt } from "./helpers.js";
import { map, join, compose, filter } from "ramda";

const isEmptyParagraph = paragraph => paragraph !== "  " + "!  ";
const paragraphs = compose(
  join("\n"),
  filter(isEmptyParagraph),
  map(buildParagraph),
  arange,
  randInt
)(10);

console.log(paragraphs);
