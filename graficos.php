<!DOCTYPE HTML>
<html lang="es">

<head>
    <title>Blog Post</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
    <link rel="stylesheet" href="./fontawesome/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="graficos.js"></script>
    <script type="text/javascript">
        var array = [
            "./column-chart-with-axis-break/index.php", 
            "./javascript/donut-chart/index.php", 
            "./javascript/cylinder-chart/index.php", 
            "./javascript/simple-pie-chart/index.php",
            "./javascript/simple-3D-pie-chart/index.php", 
            "./javascript/simple-bar-chart/index.php",
            
        ];
        var array2 = [
            
            "./javascript/column-chart-with-images-as-bullets/index.php",
            "javascript/stacked-3D-column-chart/index.php"
        ];
        $(document).ready(function() {
            $.miPlugin({

                modal: {


                    size: 'modal-dialog modal-xl',
                    title: 'reporte de llamadas entrantes',
                    class: 'text-danger',
                    link: array,
                    link2: array2


                },
            });
            $('#modal').modal('toggle');

        });
    </script>
</head>

<body>
</body>

</html>