<!DOCTYPE HTML>
<html lang="es">

<head>
    <title>Blog Post</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
    <div id="chartdiv"></div>
    <script src="./core.js"></script>
    <script src="./charts.js"></script>
    <script src="./themes/animated.js"></script>
    <link rel="stylesheet" href="./fontawesome/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="graficos.js"></script>
    <script type="text/javascript" src="./javascript copy/column-chart-with-axis-break copy/index.js"></script>

    <script type="text/javascript">
        var array = [
            "./javascript copy/column-chart-with-axis-break copy/index.js",
            "./javascript copy/donut-chart/index.php",
            "./javascript copy/cylinder-chart/index.php",
            "./javascript copy/simple-pie-chart/index.php",
            "./javascript copy/simple-3D-pie-chart/index.php",
            "./javascript copy/simple-bar-chart/index.php",

        ];
        var array2 = [

            "./javascript copy/column-chart-with-images-as-bullets/index.php",
            "./javascript copy/stacked-3D-column-chart/index.php"
        ];
        $(document).ready(function() {
            $.miPlugin({

                modal: {


                    size: 'modal-dialog modal-xl',
                    title: 'reporte de llamadas entrantes',
                    class: 'text-danger',
                    link: array,
                    link2: array2


                }
            });
            $('#modal').modal('toggle');

        });
        $(document).ready(function() {
            $.miPlugin2({

                am4charts: {
                    data: <?php
                            include('../conexion_postgres/consulta01.php');
                            //$fecha1 = $_GET["fecha1"];
                            //$fecha2 =  $_GET["fecha2"];
                            $fecha1 = '01-02-2018';
                            $fecha2 = '01-02-2019';
                            $consulta = "select tel_registry_incoming_calls.group, count(*) from tel_registry_incoming_calls('$fecha1', '$fecha2', '', '', '','' , '',0 ) where disposition= 'ANSWERED' group by tel_registry_incoming_calls.group";
                            consulta($consulta); ?>,

                    value_max: 300,
                    axis_min: 70,
                    axis_max: 50,
                    category: 'group',
                    value: 'count',
                    title: 'grupos por llamadas entrantes ',
                    title_fontSize: 20,
                    title_marginBottom: 50,
                }

            });

        });
    </script>
</head>

<body>
</body>

</html>