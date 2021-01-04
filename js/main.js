//Docs: https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var options = { 
  title: 'Wheel of Life over Time',
  displayAnnotations: true,
  curveType: 'function',
  legend: { 
    position: 'right' 
  },
  vAxis: { 
    viewWindow: {
      min: 0,
      max: 10
    }
  },
  hAxis: {
    format:'MMM y'
  }
};

function drawChart() {

  //zero-based months(?!)
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Career', 'Money', 'Health', 'Love & Romance', 'Friends & Family', 'Personal Growth', 'Fun & Recreation', 'Physical Environment'],
    [new Date(2019,  9, 31),  2,  4,  9,  2,  8, 10,  3,  8],
    [new Date(2019, 10,  1),  6,  3,  6,  0,  8,  7,  3,  1],
    [new Date(2019, 10, 25),  1,  1,  9,  2,  8,  7,  5,  1],
    [new Date(2019, 11,  2),  0,  2,  9 , 3,  8,  8,  5,  2],
    [new Date(2020,  0,  5),  1,  0,  9,  6,  8,  8,  4,  4],
    [new Date(2020,  1, 17),  2,  1,  5,  4,  7,  6,  7,  7],
    [new Date(2020,  2, 23),  2,  2,  5,  4,  7,  7,  6,  7],
    [new Date(2020,  3, 30),  6,  4,  7,  6,  6,  8,  6,  8],
    [new Date(2020,  5, 14),  4,  5,  7,  4,  7,  8,  6,  9],
    [new Date(2020,  6, 10),  2,  4,  6,  7,  6,  7,  5,  9],
    [new Date(2020,  7, 10),  5,  4,  9,  8,  8,  8,  7,  9],
    [new Date(2020,  8,  4),  6,  4,  8,  7,  7,  9,  8,  9],
    [new Date(2020,  9, 12),  3,  3,  7,  7,  7,  7,  4,  9],
    [new Date(2020, 10,  2),  2,  2,  6,  4,  6,  7,  5,  9],
    [new Date(2020, 11,  2),  2,  1,  6,  4,  7,  6,  6,  8],
    [new Date(2021,  0,  2),  4,  2,  8,  7,  5,  8,  7,  9]
  ]);

  
 data = new google.visualization.DataTable();
data.addColumn('string', 'Month'); // Implicit domain label col.
data.addColumn('number', 'Sales'); // Implicit series 1 data col.
data.addColumn({type:'number', role:'interval'});  // interval role col.
data.addColumn({type:'number', role:'interval'});  // interval role col.
data.addColumn({type:'string', role:'annotation'}); // annotation role col.
data.addColumn({type:'string', role:'annotationText'}); // annotationText col.
data.addColumn({type:'boolean',role:'certainty'}); // certainty col.
data.addRows([
    ['April',1000,  900, 1100,  'A','Stolen data', true],
    ['May',  1170, 1000, 1200,  'B','Coffee spill', true],
    ['June',  660,  550,  800,  'C','Wumpus attack', true],
    ['July', 1030, null, null, null, null, false]
]);


  data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Career');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addRows([
    [new Date(2019,  9, 31),  2, null, null], //career
    [new Date(2019, 10,  1),  6, '.', 'testBody'], //Career
    [new Date(2019, 10, 25),  1, null, null]
  ]);
  
  
  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  //var chart = new google.visualization.AnnotationChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

//redraw the graph on resize, debounced
var resizeTimer;
window.addEventListener("resize", function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    console.log("resized");
    drawChart(true);
  }, 100);
});
