<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>amCharts V4 Example - column-chart-with-images-as-bullets</title>
  <link rel="stylesheet" href="index.css" />
</head>

<body>
  <div id="chartdiv"></div>
  <script src="../../core.js"></script>
  <script src="../../charts.js"></script>
  <script src="../../themes/animated.js"></script>
  <link rel="stylesheet" type="text/css" href="../../bootstrap/bootstrap-3.4.1-dist/css/bootstrap.css">
  <script type="text/javascript" src="../../jquery-ui-1.12.1.custom/external/jquery/jquery.js"></script>
  <script type="text/javascript" src="../../bootstrap/bootstrap-3.4.1-dist/js/bootstrap.js"></script>
  <script src="./index.js"></script>
  <script type="text/javascript">
  $(document).ready(function () {
        $.miPlugin({
            am4charts: {
                data: <?php
                  include('../../conexion_postgres/consulta01.php');
                  //$fecha1 = $_GET["fecha1"];
                  //$fecha2 =  $_GET["fecha2"];
                  $fecha1 = '01-02-2018';
                  $fecha2 = '01-02-2019';
                  $consulta = "select accountname, answered, (avgcalltime::TIME-avganswertime::TIME) as tiempotimbrado ,avgcalltime  from coc_queue_report_agent_general(' $fecha1', ' $fecha2',0,0) order by answered desc";
                  consulta($consulta); ?>,
                value_max: 300,
                axis_min: 70,
                axis_max: 50,
                category: 'accountname',
                value: 'answered',
                title: 'agentes por llamadas entrantes ',
                title_fontSize: 20,
                title_marginBottom: 50,
            }



        });
    });
</script>
</body>

</html>