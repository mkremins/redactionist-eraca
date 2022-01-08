# redactionist-eraca
This repository contains data and code for the paper “Evaluating Mixed-Initiative Creative Interfaces via Expressive Range Coverage Analysis”.

Contents are as follows:

## Analysis and visualization code

* `index.html`: Webpage containing the visualizations that we include in the paper, plus several others.
* `main.js`: Definitions of expressive range metrics and visualization code.
* `legend.js`: Lightly modified community D3 extension for rendering a gradient legend, like those we include in trajectory visualizations.

## Poem data

* `fullWords.js`: Redactionist-internal representation of the source text paragraph used in our study. Each poem is a list of integers; the integers are indexes into this array representing the words that were selected to be left un-erased.
* `userPoems.js`: Forty participant-created poems (10 poems each times four participants), with the order in which each participant created their poems preserved.
* `fullPoemspace.js`: Complete list of all poems that Redactionist knows how to create from the source text.

## Word frequency data

* `SUBTLEXus74268words.txt`: Raw list of all the unique words in the SUBTLEX corpus, annotated with word frequency data and some other stuff. Downloaded from [here](https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus/overview.htm).
* `makeWordFreqData.js`: Node.js command-line script that processes the raw SUBTLEX frequency data into a JavaScript file suitable for import by the browser (and subsequent usage by the analysis code in `main.js`).
* `wordFreqData.js`: JavaScript file containing word frequency data, generated by running `node makeWordFreqData.js` at the command line within this repository.