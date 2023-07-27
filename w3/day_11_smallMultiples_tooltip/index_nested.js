var w = 1000;
var h = 500;
var rad = 20;
var margin = rad * 2;
var div = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
var svg = d3.select("body").append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "black")

var skyData = [];
var nested;
d3.json("moreData.json").then(function (data) {
  skyData = data;
  var map = {
    'monday': 1,'tuesday': 2,'wednesday': 3,'thursday': 4,'friday': 5,'saturday': 6,
    'sunday': 7
  };
  skyData.sort((a, b) => {
    return map[a.day] - map[b.day];
  });

  nested = d3.group(skyData, function (d) {
    return d.day;
  })
  processData();
});

var dayNames = [];
var dayScale = d3.scaleBand()
  .range([margin * 2, w - margin])
function processData() {
  for (var i = 0; i < skyData.length; i++) {
    dayNames.push(skyData[i].day)
  }
  dayScale.domain(dayNames)
  draw()
}

var radScale = d3.scaleLinear()
  .domain([0, 100])
  .range([rad / 4, rad])

function draw() {
  var g = svg.selectAll('g')
    .data(nested)
    .join('g')
    .attr('class', function (d) {
      return d[0];
    })
    .attr('transform', function (d, i) {
      return 'translate(' + dayScale(d[0]) + ',' + 80 + ')'
    })

  //here d is the elements of the nested array 
  //so is attaching the array from the property values
  var circShape = g.selectAll('circle')
    .data(function (d) {
      return d[1];
    })
    .join('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', function (d) {
      return radScale(d.sky)
    })
    .attr('fill', 'none')
    .attr('stroke', 'white')
}