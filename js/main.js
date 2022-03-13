//Docs: https://developers.google.com/chart/interactive/docs/gallery/linechart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


var options = { 
  displayAnnotations: true,
  curveType: 'function',
  chartArea: {width: '90%', height: '85%'},
  legend: { 
    position: 'top',
    maxLines: 3 
  },
  vAxis: { 
    viewWindow: {
      min: 0,
      max: 10
    },
    gridlines: {
      count: 10
    }
  },
  hAxis: {
    format:'MMM `yy'
  },
  explorer: {
    axis: 'horizontal',
    keepInBounds: true,
    maxZoomOut: 1
  },
  focusTarget: 'category',
  series:{
    0:{
      lineWidth: 50,
      color: '#eef',
      annotations: {
        textStyle: {
          color: '#333' 
        }
      }
    }
  }
};

function drawChart() {
  data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');

  data.addColumn('number', 'Average');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.
  
  data.addColumn('number', 'Career');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Money');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Health');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Love & Romance');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Friends & Fam');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Parenting');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Personal Growth');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Fun & Recreation');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.

  data.addColumn('number', 'Physical Environment');
  data.addColumn({type:'string', role:'annotation'}); // annotation role col.
  data.addColumn({type:'string', role:'annotationText'}); // annotationText col.



  data.addRows([
  
    [/* Date */             new Date('Nov 1, 2019'),
      /* Average */          4.25, '', '',
      /* Career */           6, '', '',
      /* Money */            3, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   0, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        3, '', '',
      /* Physical Env */     1, '', '']
    ,[/* Date */             new Date('Dec 2, 2019'), 
      /* Average */          4.625, '', '',
      /* Career */           0, '', '',
      /* Money */            2, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   3, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     2, '', '']
    ,[/* Date */             new Date('Jan 5, 2020'), 
      /* Average */          5, '', '',
      /* Career */           1, '', '',
      /* Money */            0, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        4, '', '',
      /* Physical Env */     4, 'Secured new home', '']
    ,[/* Date */             new Date('Feb 17, 2020'), 
      /* Average */          4.875, '', '',
      /* Career */           2, '', '',
      /* Money */            1, '', '',
      /* Health */           5, 'Sick', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  6, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     7, 'Moved to Cambie', '']
    ,[/* Date */             new Date('Mar 23, 2020'), 
      /* Average */          5, 'COVID begins', '',
      /* Career */           2, '', '',
      /* Money */            2, '', '',
      /* Health */           5, '', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date('Apr 30, 2020'), 
      /* Average */          6.375, '', '',
      /* Career */           6, 'WFH', '',
      /* Money */            4, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('Jun 14, 2020'), 
      /* Average */          6.25, '', '',
      /* Career */           4, '', '',
      /* Money */            5, '', '',
      /* Health */           7, 'Bike Crash', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Jul 10, 2020'), 
      /* Average */          5.75, '', '',
      /* Career */           2, '', '',
      /* Money */            4, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Aug 10, 2020'), 
      /* Average */          7.25, '', '',
      /* Career */           5, '', '',
      /* Money */            4, '', '',
      /* Health */           9, '', '',
      /* Love & Romance */   8, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Sep 4, 2020'), 
      /* Average */          7.25, 'JCC', '',
      /* Career */           6, '', '',
      /* Money */            4, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  9, '', '',
      /* Fun & Rec */        8, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Oct 12, 2020'), 
      /* Average */          5.875, '', '',
      /* Career */           3, '', '',
      /* Money */            3, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        4, '211 Prep', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Nov 2, 2020'), 
      /* Average */          5.125, '', '',
      /* Career */           2, '', '',
      /* Money */            2, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   4, 'CJ', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Dec 2, 2020'), 
      /* Average */          5.000, '', '',
      /* Career */           2, '', '',
      /* Money */            1, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   4, 'AL', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  6, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('jan 2, 2021'), 
      /* Average */          6.25, '', '',
      /* Career */           4, '', '',
      /* Money */            2, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    5, 'Pamela', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     9, '', '']
    ,
    [/* Date */             new Date('Feb 1, 2021'), 
      /* Average */          6.25, '', '',
      /* Career */           4, '', '',
      /* Money */            4, 'Verafin', '',
      /* Health */           7, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,
    [/* Date */             new Date('mar 4, 2021'), 
      /* Average */          6.25, 'Mediation', '',
      /* Career */           4, '', '',
      /* Money */            4, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    5, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  9, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     8, '', '']
     ,
     [/* Date */             new Date('apr 12, 2021'), 
      /* Average */          6.00, '', '',
      /* Career */           6, 'UCEO', '',
      /* Money */            4, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        null, '', '',
      /* Personal Growth */  6, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     7, 'Settlement', '']
    ,[/* Date */             new Date('may 2, 2021'),
      /* Average */          6.67, '', '',
      /* Career */           8, 'Focus', '',
      /* Money */            5, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   7, '', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        7, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date('June 11, 2021'), 
      /* Average */          6.67, '', '',
      /* Career */           8, '', '',
      /* Money */            4, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   4, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        9, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('July 8, 2021'), 
      /* Average */          7.22, '', '',
      /* Career */           8, '', '',
      /* Money */            7, 'Grants', '',
      /* Health */           7, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        7, '', '',
      /* Personal Growth */  9, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, 'Chair', '']
    ,[/* Date */             new Date('August 2, 2021'), 
      /* Average */          7.22, '', '',
      /* Career */           7, 'UCEO round 2', '',
      /* Money */            6, '', '',
      /* Health */           8, 'Fully Vaxed', '',
      /* Love & Romance */   7, 'KFZG', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        7, '', '',
      /* Personal Growth */  8, 'Retreat', '',
      /* Fun & Rec */        7, '14,000m', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('September 5, 2021'), 
      /* Average */          6.44, '', '',
      /* Career */           8, 'Sam Started', '',
      /* Money */            5, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   5, '', '',
      /* Friends & Fam */    7, 'Mom Visit', '',
      /* Parenting */        8, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        4, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date('October 8, 2021'), 
      /* Average */          7.88, '', '',
      /* Career */           10, '', '',
      /* Money */            6, '', '',
      /* Health */           6, '', '',
      /* Love & Romance */   9, 'SA', '',
      /* Friends & Fam */    8, 'Nukul', '',
      /* Parenting */        8, 'Kindergarten', '',
      /* Personal Growth */  9, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('November 3, 2021'), 
      /* Average */          6.78, '', '',
      /* Career */           8, '', '',
      /* Money */            6, '', '',
      /* Health */           7, '', '',
      /* Love & Romance */   6, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        7, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date('December 11, 2021'), 
      /* Average */          7, '', '',
      /* Career */           8, '', '',
      /* Money */            6, '', '',
      /* Health */           5, '', '',
      /* Love & Romance */  10, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        8, '', '',
      /* Personal Growth */  7, '', '',
      /* Fun & Rec */        5, '', '',
      /* Physical Env */     7, '', '']
    ,[/* Date */             new Date('January 1, 2022'), 
      /* Average */          7.888, 'Week Off', '',
      /* Career */           8, '', '',
      /* Money */            6, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   9, '', '',
      /* Friends & Fam */    7, '', '',
      /* Parenting */        9, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        7, '', '',
      /* Physical Env */     9, '', '']
    ,[/* Date */             new Date('Feb 3, 2022'), 
      /* Average */          7.888, '', '',
      /* Career */           9, 'All-hands', '',
      /* Money */            7, '', '',
      /* Health */           8, 'TdZ', '',
      /* Love & Romance */   9, '', '',
      /* Friends & Fam */    6, '', '',
      /* Parenting */        8, '', '',
      /* Personal Growth */  10, '', '',
      /* Fun & Rec */        6, '', '',
      /* Physical Env */     8, '', '']
    ,[/* Date */             new Date('March 2, 2022'), 
      /* Average */          8, '', '',
      /* Career */           9, '', '',
      /* Money */            6, '', '',
      /* Health */           8, '', '',
      /* Love & Romance */   10, '', '',
      /* Friends & Fam */    8, '', '',
      /* Parenting */        9, '', '',
      /* Personal Growth */  8, '', '',
      /* Fun & Rec */        7, 'Whistler', '',
      /* Physical Env */     7, '', '']

    // ,[/* Date */             new Date(''), 
    //   /* Average */          , '', '',
    //   /* Career */           , '', '',
    //   /* Money */            , '', '',
    //   /* Health */           , '', '',
    //   /* Love & Romance */   , '', '',
    //   /* Friends & Fam */    , '', '',
    //   /* Parenting */        , '', '',
    //   /* Personal Growth */  , '', '',
    //   /* Fun & Rec */        , '', '',
    //   /* Physical Env */     , '', '']


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
