<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>amCharts V4 Example - donut-chart</title>
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
  <script src="index.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      $.miPlugin({
        am4charts: {
          data: <?php
                include('../../conexion_postgres/consulta01.php');
                //$fecha1 = $_GET["fecha1"];
                //$fecha2 =  $_GET["fecha2"];
                $fecha1 = '01-02-2018';
                $fecha2 = '01-02-2019';
                $consulta = "select tel_registry_incoming_calls.group, count(*) from tel_registry_incoming_calls('$fecha1', '$fecha2', '', '', '','' , '',0 ) where disposition= 'ANSWERED' group by tel_registry_incoming_calls.group";
                consulta($consulta); ?>,
          value_max: 250,
          axis_min: 12000,
          axis_max: 20000,
          category: 'group',
          value: 'count',
          title: 'grupos por llamadas entrantes ',
          title_fontSize: 20,
          title_marginBottom: 50,
        }



      });
    });
  </script>
</body>

</html>