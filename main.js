/// utility functions

function sum(xs) {
  return xs.reduce((a, b) => a + b);
}

function average(xs) {
  return sum(xs) / xs.length;
}

function distinct(xs) {
  const seen = [];
  for (const x of xs) {
    if (!seen.includes(x)) seen.push(x);
  }
  return seen;
}

// Perform one level of flattening on an array of arrays `xss`,
// returning an array of `xs`.
function flatten1(xss) {
  return xss.reduce((a, b) => a.concat(b));
}

// Create a DOM element from an HTML string.
function createNode(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
}

/// actual data exported from Redactionist

const userSessions = [user1Poems, user2Poems, user3Poems, user4Poems];

function hydratePoem(poem) {
  return poem.sort((a, b) => a - b).map(wordIdx => fullWords[wordIdx].text).join(" ");
}
for (const userPoems of userSessions) {
  console.log(userPoems.map(hydratePoem));
}

const mostCharacteristicWordsByUser = {};
for (let userIdx = 0; userIdx < userSessions.length; userIdx++) {
  // flatten all the words used in this user's poems into a single array
  const userPoems = userSessions[userIdx];
  const userPoemWords = flatten1(userPoems);
  // do the same for all other users (and distinctify the words they used)
  const otherUserIdxs = [0, 1, 2].filter(otherUserIdx => otherUserIdx !== userIdx);
  const otherPoems = flatten1(otherUserIdxs.map(idx => userSessions[idx]));
  const otherPoemWords = distinct(flatten1(otherPoems));
  // count words used by this user, but not others
  const userOnlyWords = userPoemWords.filter(word => !otherPoemWords.includes(word));
  console.log(userOnlyWords);
  const characteristicWordCounts = {};
  for (const word of userOnlyWords) {
    const prevCount = characteristicWordCounts[word] || 0;
    characteristicWordCounts[word] = prevCount + 1;
  }
  mostCharacteristicWordsByUser[userIdx] = characteristicWordCounts;
}
console.log("mostCharacteristicWordsByUser", mostCharacteristicWordsByUser);

const indexOccurrenceCounts = {};
for (const poem of fullPoemspace) {
  for (const wordIndex of poem) {
    const prevCount = indexOccurrenceCounts[wordIndex] || 0;
    indexOccurrenceCounts[wordIndex] = prevCount + 1;
  }
}
console.log("indexOccurrenceCounts", indexOccurrenceCounts);

const indexOccurrenceCountsAsArray = [];
for (let i = 0; i < fullWords.length; i++) {
  const occurrenceCount = indexOccurrenceCounts[i] || 0;
  indexOccurrenceCountsAsArray.push(occurrenceCount);
}

const user1IndexOccurrenceCountsAsArray = Array(fullWords.length).fill(0);
for (const poem of user1Poems) {
  for (const wordIndex of poem) {
    user1IndexOccurrenceCountsAsArray[wordIndex] += 1;
  }
}

const user1IndexOccurrenceFrequencies = [];
for (let i = 0; i < fullWords.length; i++) {
  const countInUserPoems = user1IndexOccurrenceCountsAsArray[i];
  const countInFullPoemspace = indexOccurrenceCountsAsArray[i];
  const frequency = countInFullPoemspace > 0 ? countInUserPoems / countInFullPoemspace : 0;
  user1IndexOccurrenceFrequencies.push(frequency);
}
console.log("user1IndexOccurrenceFrequencies", user1IndexOccurrenceFrequencies);

const wordFreqPairs = Object.keys(indexOccurrenceCounts).map(wordIdx => {
  return [fullWords[wordIdx].text, indexOccurrenceCounts[wordIdx]];
});
const wordsOrderedByPoemspaceFrequency = wordFreqPairs.sort((a, b) => a[1] - b[1]);

/// word pair co-occurrence data

const coOccurrenceCounts = {};
for (const poem of fullPoemspace) {
  for (const wordIndexA of poem) {
    for (const wordIndexB of poem) {
      if (wordIndexA === wordIndexB) continue;
      // forward order
      coOccurrenceCounts[wordIndexA] = coOccurrenceCounts[wordIndexA] || {};
      const prevCountA = coOccurrenceCounts[wordIndexA][wordIndexB];
      coOccurrenceCounts[wordIndexA][wordIndexB] = (prevCountA || 0) + 1;
      // reverse order
      coOccurrenceCounts[wordIndexB] = coOccurrenceCounts[wordIndexB] || {};
      const prevCountB = coOccurrenceCounts[wordIndexB][wordIndexA];
      coOccurrenceCounts[wordIndexB][wordIndexA] = (prevCountB || 0) + 1;
    }
  }
}
console.log("coOccurrenceCounts", coOccurrenceCounts);

// given word A is present in a poem, what's the likelihood that any word B is also present?
const coOccurrenceProbabilities = {};
for (const wordIndexA of Object.keys(coOccurrenceCounts)) {
  coOccurrenceProbabilities[wordIndexA] = {};
  const countsForThisWord = coOccurrenceCounts[wordIndexA];
  const totalCountA = sum(Object.values(countsForThisWord));
  for (const wordIndexB of Object.keys(countsForThisWord)) {
    const countBGivenA = countsForThisWord[wordIndexB];
    const probBGivenA = countBGivenA / totalCountA;
    coOccurrenceProbabilities[wordIndexA][wordIndexB] = probBGivenA;
  }
}
console.log("coOccurrenceProbabilities", coOccurrenceProbabilities);

/// poem summary statistics

function averageWordPosition(poem) {
  return average(poem);
}

function poemLengthInChars(poem) {
  const wordsInPoem = poem.map(wordIndex => fullWords[wordIndex].text);
  const wordLengths = wordsInPoem.map(word => word.length);
  return sum(wordLengths);
}

function averageWordLength(poem) {
  return poemLengthInChars(poem) / poem.length;
}

function frequencyWithinPoemspace(wordIndex) {
  const occurrenceCount = indexOccurrenceCounts[wordIndex] || 0;
  const totalWordsCount = sum(Object.values(indexOccurrenceCounts));
  return occurrenceCount / totalWordsCount;
}

function withinPoemspaceFrequencyOfRarestWord(poem) {
  const frequenciesWithinPoemspace = poem.map(frequencyWithinPoemspace);
  return frequenciesWithinPoemspace.sort()[0];
}

function withinPoemspaceFrequencyOfMostCommonWord(poem) {
  const frequenciesWithinPoemspace = poem.map(frequencyWithinPoemspace);
  return frequenciesWithinPoemspace.sort().reverse()[0];
}

function averageWithinPoemspaceWordFrequency(poem) {
  return average(poem.map(frequencyWithinPoemspace));
}

function percentSourceWordsRetained(poem) {
  return poem.length / fullWords.length;
}

function poemLengthInWords(poem) {
  return poem.length;
}

function distanceBetweenFirstAndLastWord(poem) {
  const sorted = [...poem].sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}

function averageWordPairProbability(poem) {
  const wordPairsAndProbs = [];
  for (const wordIndexA of poem) {
    for (const wordIndexB of poem) {
      if (wordIndexA === wordIndexB) continue;
      // any principled reason to use P(B|A) vs P(A|B)? seems arbitrary to me
      const probBGivenA = coOccurrenceProbabilities[wordIndexA][wordIndexB];
      const probAGivenB = coOccurrenceProbabilities[wordIndexB][wordIndexA];
      wordPairsAndProbs.push([wordIndexA, wordIndexB, probBGivenA]);
    }
  }
  return average(wordPairsAndProbs.map(x => x[2]));
}

function probabilityOfLeastLikelyWordPair(poem) {
  const wordPairsAndProbs = [];
  for (const wordIndexA of poem) {
    for (const wordIndexB of poem) {
      if (wordIndexA === wordIndexB) continue;
      // any principled reason to use P(B|A) vs P(A|B)? seems arbitrary to me
      const probBGivenA = coOccurrenceProbabilities[wordIndexA][wordIndexB];
      const probAGivenB = coOccurrenceProbabilities[wordIndexB][wordIndexA];
      wordPairsAndProbs.push([wordIndexA, wordIndexB, probBGivenA]);
    }
  }
  const leastLikelyPairs = wordPairsAndProbs.sort((a, b) => a[2] - b[2]);
  //console.log("least likely pairs", leastLikelyPairs);
  const leastLikelyPair = leastLikelyPairs[0];
  return leastLikelyPair[2];
}
probabilityOfLeastLikelyWordPair(user1Poems[0]);

/// metrics infrastructure

const poemMetrics = {
  "averageWordPosition": {
    evaluate: averageWordPosition,
    range: [0, 160]
  },
  "distanceBetweenFirstAndLastWord": {
    evaluate: distanceBetweenFirstAndLastWord,
    range: [0, 160] // or 180 to show upper end
  },
  "averageWithinPoemspaceWordFrequency": {
    evaluate: averageWithinPoemspaceWordFrequency,
    range: [0, 0.04]
  },
  "poemLengthInChars": {
    evaluate: poemLengthInChars,
    range: [0, 60]
  },
  // i don't like this one very much visually, but let's try it
  "withinPoemspaceFrequencyOfRarestWord": {
    evaluate: withinPoemspaceFrequencyOfRarestWord,
    range: [0, 0.015]
  },
  "averageWordPairProbability": {
    evaluate: averageWordPairProbability,
    range: [0, 0.06]
  },
  "probabilityOfLeastLikelyWordPair": {
    evaluate: probabilityOfLeastLikelyWordPair,
    range: [0, 0.016]
  },
};
for (const metricName of Object.keys(poemMetrics)) {
  poemMetrics[metricName].name = metricName;
}

/// hexbin chart builder

function summarizePoem(poem, xMetricName, yMetricName) {
  const xMetric = poemMetrics[xMetricName];
  const yMetric = poemMetrics[yMetricName];
  return {x: xMetric.evaluate(poem), y: yMetric.evaluate(poem)};
}

function makeHexbinChart(xMetricName, yMetricName, options) {
  // declare basic chart dimensions
  const svgWidth = 400;
  const svgHeight = 400;
  const width = 640;
  const height = 640;
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  const radius = 7.5;

  // set up the metrics
  const xMetric = poemMetrics[xMetricName];
  const yMetric = poemMetrics[yMetricName];

  // summarize the full poemspace
  const data = fullPoemspace.map(poem => summarizePoem(poem, xMetricName, yMetricName));

  // set up x/y scales
  const xScale = d3.scaleLinear()
    //.domain(d3.extent(data, d => d.x))
    .domain(xMetric.range)
    .rangeRound([margin.left, width - margin.right]);
  const yScale = d3.scaleLinear()
    //.domain(d3.extent(data, d => d.y))
    .domain(yMetric.range) // for averageWithinPoemspaceWordFrequency
    .rangeRound([height - margin.bottom, margin.top]);

  // put data in hexbins
  const hexbin = d3.hexbin()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .radius(radius * width / (height - 1))
    .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]]);
  const bins = hexbin(data);
  //console.log(bins);

  // configure hexbin color
  const hexbinColorRange = ["black", "#ccc"];
  const hexbinColor = d3.scaleSequential(hexbinColorRange)
    .domain([0, d3.max(bins, d => d.length) / 2]);

  // set up x/y axes
  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).ticks(width / 80, "f"))
    //.call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", width - margin.right)
      .attr("y", -4)
      .attr("fill", "currentColor")
      .attr("font-weight", "bold")
      .attr("text-anchor", "end")
      .text(data.x));
  const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale).ticks(null, "f"/*".1s"*/))
    //.call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", 4)
      .attr("y", margin.top)
      .attr("dy", ".71em")
      .attr("fill", "currentColor")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      .text(data.y));

  // create top-level SVG
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // draw background rect for hexbins-area
  svg.append("rect")
    .attr("color", "black")
    .attr("width", width - (margin.left + margin.right))
    .attr("height", height - (margin.top + margin.bottom))
    .attr("x", margin.left)
    .attr("y", margin.top);

  // draw axes
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);

  // create clip path for hexbins-area (to keep hexagons from overflowing onto axes)
  svg.append("clipPath")
    .attr("id", "hexbins-area")
    .append("rect")
      .attr("width", width - (margin.left + margin.right))
      .attr("height", height - (margin.top + margin.bottom))
      .attr("x", margin.left)
      .attr("y", margin.top);

  // draw hexbins
  svg.append("g")
    .attr("clip-path", "url(#hexbins-area)")
    .selectAll("path")
    .data(bins)
    .join("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("fill", d => hexbinColor(d.length));

  // TODO draw color legend for hexbins?

  // draw multi-user artifacts layer if wanted
  if (options.drawAllUserData) {
    const userColors = d3.schemeCategory10;//d3.schemeTableau10;
    for (let i = 0; i < userSessions.length; i++) {
      const userPoems = userSessions[i];
      const userData = userPoems.map(poem => summarizePoem(poem, xMetricName, yMetricName));
      const userColor = userColors[i];
      svg.append("g")
        .selectAll("circle")
        .data(userData)
        .enter().append("circle")
          .attr("cx", d => xScale(d.x) /**/)
          //.attr("cx", d => margin.left + (d.x * (width - (margin.left + margin.right))))
          .attr("cy", d => yScale(d.y) )
          //.attr("cy", d => margin.top + (d.y * (height - (margin.top + margin.bottom))))
          .attr("r", 5)
          .attr("fill", userColor)
          .attr("stroke", "black")
          .attr("stroke-width", 1);
    }
  }

  // draw single-user artifacts layer if wanted
  if (options.drawSingleUserData) {
    const userPoems = userSessions[options.targetUser || 0];
    const userData = userPoems.map(poem => summarizePoem(poem, xMetricName, yMetricName));
    const colorRange = d3.interpolateOranges; //d3.interpolateCool;
    const userArtifactsColor = d3.scaleSequential(colorRange).domain([0, 10]);
    svg.append("g")
      .selectAll("circle")
      .data(userData)
      .enter().append("circle")
        .attr("cx", d => xScale(d.x))
        .attr("cy", d => yScale(d.y))
        .attr("r", 5)
        //.attr("fill", "red")
        .attr("fill", (d, i) => userArtifactsColor(i))
        .attr("stroke", "black")
        .attr("stroke-width", 1);
  }

  // return finished chart
  const chart = svg.node();
  return chart;
}

const metricPairs = [
  // where in the source text are words chosen from, vs how far apart the words are
  ["averageWordPosition", "distanceBetweenFirstAndLastWord"],

  // where in the source text are words chosen from, vs how common are the individual words used
  ["averageWordPosition", "averageWithinPoemspaceWordFrequency"],
  ["averageWordPosition", "withinPoemspaceFrequencyOfRarestWord"],

  // where in the source text are words chosen from, vs how common are the word pairs used
  ["averageWordPosition", "averageWordPairProbability"],
  ["averageWordPosition", "probabilityOfLeastLikelyWordPair"],

  // how far apart are the words, vs how common are the individual words used
  ["distanceBetweenFirstAndLastWord", "averageWithinPoemspaceWordFrequency"],
  ["distanceBetweenFirstAndLastWord", "withinPoemspaceFrequencyOfRarestWord"],

  // how far apart are the words, vs how common are the word pairs used
  ["distanceBetweenFirstAndLastWord", "averageWordPairProbability"],
  ["distanceBetweenFirstAndLastWord", "probabilityOfLeastLikelyWordPair"],

  // do *average* single-word and word pair probabilities correlate strongly
  // with *minimal* probabilities for the same?
  ["averageWordPairProbability", "probabilityOfLeastLikelyWordPair"],
  ["averageWithinPoemspaceWordFrequency", "withinPoemspaceFrequencyOfRarestWord"],
];

const mainDiv = document.getElementById("mainDiv");

for (const metricPair of metricPairs) {
  mainDiv.appendChild(createNode(`<h2>${metricPair.join(" vs ")}</h2>`));
  const mainChart = makeHexbinChart(metricPair[0], metricPair[1], {drawAllUserData: true});
  mainDiv.appendChild(mainChart);
  for (let userIdx = 0; userIdx < userSessions.length; userIdx++) {
    const perUserChart = makeHexbinChart(
      metricPair[0],
      metricPair[1],
      {drawSingleUserData: true, targetUser: userIdx}
    );
    mainDiv.appendChild(perUserChart);
  }
  const userArtifactsLegend = legend({
    color: d3.scaleSequential([0, 10], d3.interpolateOranges),
    title: "User artifact creation order"
  });
  mainDiv.appendChild(userArtifactsLegend);
}

/// word usage heatmap

// https://stackoverflow.com/a/41491220
function pickTextColorBasedOnBgColor(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map((col) => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  return (L > 0.179) ? darkColor : lightColor;
}

function makeHeatmap(valuesPerWord) {
  const highestCount = Math.max(...valuesPerWord);
  const heatmapColor = d3.scaleSequential(d3.interpolateInferno)
    .domain([0, highestCount]);
  const heatmapBaseColor = heatmapColor(0);

  const heatmapHTML = [];
  for (let i = 0; i < fullWords.length; i++) {
    const count = valuesPerWord[i];
    const text = fullWords[i].text;
    const bgColor = heatmapColor(count);
    const textColor = pickTextColorBasedOnBgColor(bgColor, "white", "black"); // unused for now
    heatmapHTML.push(`<span style="background:${bgColor};color:${textColor}">${text}</span>`);
    heatmapHTML.push(`<span style="background:${heatmapBaseColor}"> </span>`);
  }
  const heatmapNode = createNode(`<p class="heatmap">${heatmapHTML.join("")}</p>`);
  mainDiv.appendChild(heatmapNode);
}

makeHeatmap(indexOccurrenceCountsAsArray);
makeHeatmap(user1IndexOccurrenceCountsAsArray);
makeHeatmap(user1IndexOccurrenceFrequencies);
