//GOAL: can we set up a local coding environment, webpage and draw 1 shape on it?

var width = 1000;
var height = 1000;
var xPos = width / 2;
var yPos = height / 2;
var rad = 10;

var canvas = d3
  .select("#myVis")
  .append("svg")
  .attr("width", "100%")
  .attr("height", height)
  .style("background-color", "purple")
  .style("border", "5px solid black");

var circleFromD3 = canvas
  .append("circle")
  .attr("cx", xPos)
  .attr("cy", yPos)
  .attr("r", 50)
  .attr("fill", "white");

var circle = canvas
  .append("circle")
  .attr("cx", 550)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "white");

var circle2 = canvas
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "white")
  .attr("stroke", "black");

var square = canvas
  .append("rect")
  .attr("x", 400)
  .attr("y", 400)
  .attr("width", 200)
  .attr("height", 300)
  .attr("fill", "black")
  .attr("stroke", "white");
// var w = 500;
// var h = 500;
// var rad = 20;

// var svg = d3.select("svg")
// 			.attr("width",w)
// 			.attr("height",h);

// var circles = d3.selectAll("circle")
// 				.attr("r", rad)
// 				.attr("cx", w/2)
// 				.attr("cy", h/2);
