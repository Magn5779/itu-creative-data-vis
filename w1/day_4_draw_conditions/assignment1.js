var w = 1000;
var h = 550;
let spacing = 100;
canvas = d3
  .select("#canvas")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "lightblue");

var decibels = [54, 49, 61, 78, 54, 65, 70, 41, 52, 54];
/*
var people = [
  "walking by",
  "smoking cigarrette",
  "sining",
  "seeking shelder",
  "walking by",
  "walking by",
];
*/

var sounds = [
  "rain",
  "cars",
  "conversations",
  "birds",
  "sirens",
  "singing",
  "aircon humming",
  "silence",
  "white noise",
];
var rain = ["very light", "light", "heavy", "very heavy"];

// sound array visualised by cicles
var cirlces = canvas
  .selectAll("circle")
  .data(sounds)
  .join("circle")
  .attr("class", function (d) {
    return d;
  })
  .attr("cx", function (d, i) {
    return spacing + i * 100;
  })
  .attr("cy", 100)
  // the longer the string, the larger the radius
  .attr("r", function (d, i) {
    return 10 + d.length;
  })
  .attr("fill", function (d) {
    return "rgb(" + d.length * 25 + ",100,100)";
  })
  .attr("stroke", "black");

var squares = canvas
  .selectAll("rect")
  .data(rain)
  .join("rect")
  .attr("class", function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return 350 + i * 75;
  })
  .attr("y", function (d, i) {
    return 425 + i * -75;
  })
  .attr("width", 50)
  .attr("height", 50)
  .attr("fill", "darkblue")
  .attr("stroke", "white")
  .attr("stroke-width", 2.5)
  .attr("opacity", function (d) {
    return d.length * 0.05;
  });

var path = canvas.append("path");
