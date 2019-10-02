<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>amCharts V4 Example - stacked-3D-column-chart</title>
  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <div id="chartdiv"></div>
  <script src="../../../core.js"></script>
  <script src="../../../charts.js"></script>
  <script src="../../../themes/animated.js"></script>
  <script>
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.XYChart3D);


    chart.data = <?php
                  include('../../conexion_postgres/consulta01.php');
                  $fecha1 = $_GET["fecha1"];
                  $fecha2 =  $_GET["fecha2"];
                  $limite = $_GET["limite"];
                  $consulta = "select tel_registry_incoming_calls.group, sum(duration::TIME)as tiempohablado,sum(calltime::TIME)as tiempollamada, sum((calltime::TIME-duration::TIME)*-1) as tiempotimbrado, count(*) from tel_registry_incoming_calls('$fecha1', '$fecha2', '', '', '','' , '',0 ) where disposition = 'ANSWERED' group by tel_registry_incoming_calls.group ";
                  consulta($consulta); ?>;

    chart.padding(30, 30, 10, 30);

    // export 
    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = "rigth";
    chart.exporting.menu.verticalAlign = "top"
    chart.exporting.menu.items[0].icon = "https://static.thenounproject.com/png/36971-200.png";


    // titulos
    let title = chart.titles.create();
    title.text = "grupo tiempo de llamada"
    title.fontSize = 20;
    title.marginBottom = 20;

   

    chart.legend = new am4charts.Legend();

    chart.colors.step = 2;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "group";
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.interactionsEnabled = false;
 

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.strokeOpacity = 0.1;
    valueAxis.renderer.minGridDistance = 10;
    valueAxis.interactionsEnabled = false;
    valueAxis.min = 0;
    valueAxis.renderer.minWidth = 35;

    var series1 = chart.series.push(new am4charts.ColumnSeries3D());
    series1.columns.template.width = am4core.percent(70);
    series1.columns.template.tooltipText = " {name}: {valueY.value}";
    series1.name = "tiempo timbrado";
    series1.dataFields.categoryX = "group";
    series1.dataFields.valueY = "tiempotimbrado";
    series1.stacked = true;

    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.columns.template.width = am4core.percent(70);
    series2.columns.template.tooltipText = "  {name}: {valueY.value}";
    series2.name = "tiempo hablado";
    series2.dataFields.categoryX = "group";
    series2.dataFields.valueY = "tiempohablado";
    series2.stacked = true;

    /*
    var series3 = chart.series.push(new am4charts.ColumnSeries3D());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText = "{name}: {valueY.value}";
    series3.name = "Series 3";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.stacked = true;

    var series4 = chart.series.push(new am4charts.ColumnSeries3D());
    series4.columns.template.width = am4core.percent(80);
    series4.columns.template.tooltipText = "{name}: {valueY.value}";
    series4.name = "Series 4";
    series4.dataFields.categoryX = "category";
    series4.dataFields.valueY = "value4";
    series4.stacked = true;*/

    chart.scrollbarX = new am4core.Scrollbar();
  </script>
</body>

</html>