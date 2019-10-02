<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>amCharts V4 Example - column-chart-with-axis-break</title>
  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <div id="chartdiv"></div>
  <script src="../../../core.js"></script>
  <script src="../../../charts.js"></script>
  <script src="../../../themes/animated.js"></script>
  <script>
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.XYChart);


    chart.data = <?php
                  include('../../conexion_postgres/consulta01.php');
                  $fecha1 = $_GET["fecha1"];
                  $fecha2 =  $_GET["fecha2"];
                  $consulta = "select tel_registry_incoming_calls.group, count(*) from tel_registry_incoming_calls('$fecha1', '$fecha2', '', '', '','' , '',0 ) where disposition= 'ANSWERED' group by tel_registry_incoming_calls.group";
                  consulta($consulta); ?>;

    chart.padding(40, 40, 40, 40);

    // export 
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = "rigth";
    chart.exporting.menu.verticalAlign = "top"
    chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";

    let title = chart.titles.create();
    title.text = "grupo por  llamadas entrantes";
    title.fontSize = 20;
    title.marginBottom = 30;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "group";
    categoryAxis.renderer.minGridDistance = 60;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 275;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.minGridDistance = 30;

    valueAxis.renderer.labels.template.hiddenState.transitionDuration = 2000;
    valueAxis.renderer.labels.template.defaultState.transitionDuration = 2000;

    // axis break
    var axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 70;
    axisBreak.endValue = 110;
    axisBreak.breakSize = 0.05;


    // make break expand on hover
    var hoverState = axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "group";
    series.dataFields.valueY = "count";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  </script>
</body>

</html>