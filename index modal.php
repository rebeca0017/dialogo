<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
    <link rel="stylesheet" href="./fontawesome/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>

<body>
    <center>
        <!--Button trigger modal -->
        <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gruopModal">
            <i class="fas fa-chart-pie"></i>
        </button>-->
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#individualModal">
            <i class="fas fa-chart-line"></i>
        </button>
        <!-- Modal -->
        <!-- <div class="modal fade" id="gruopModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">grupos por llamadas contestadas</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="content">
                            <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
                                <form class="form-inline my-2 my-lg-0" action="index.php" method="get">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Fecha Inicial</label>
                                        <input class="custom-select" style="width:200px" type="date" name="fecha1" value="fecha_inicial" id="fecha_inicial">
                                        <label class="input-group-text" for="inputGroupSelect01">Fecha Final</label>
                                        <input class="custom-select" style="width:200px" type="date" name="fecha2" value="fecha_final" id="fecha_final">
                                        <input class="btn btn-success" type="submit" value="Enviar">
                                    </div>
                                </form>
                            </nav>
                            </br>
                        </div>
                        </br>
                        <div>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/column-chart-with-axis-break/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>"></iframe>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/donut-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/cylinder-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>"></iframe>
                        </div>
                        <div>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/semi-circle-donut-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/simple-pie-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/drag-and-change-values/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                        </div>
                        <div>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/simple-3D-pie-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="0" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/simple-bar-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>-->

        <div  class="modal fade" id="individualModal"   data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLabel">REPORTE DE LLAMADAS ENTRANTES</h1>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="content">
                            <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
                                <form class="form-inline my-2 my-lg-0" action=index.php method="get">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Fecha Inicial</label>
                                        <input class="custom-select" style="width:200px" type="date" name="fecha1" value="fecha_inicial" id="fecha_inicial">
                                        <label class="input-group-text" for="inputGroupSelect01">Fecha Final</label>
                                        <input class="custom-select" style="width:200px" type="date" name="fecha2" value="fecha_final" id="fecha_final">
                                        <label class="input-group-text" for="inputGroupSelect01">Limite</label>
                                        <select class="custom-select" id="txt" name="limite" style="width:200px">
                                            <option value="0">seleccione</option>
                                            <option value="4">4</option>
                                            <option value="8">8</option>
                                            <option value="12">12</option>
                                            <option value="15">--</option>
                                        </select>
                                        <!--<input class="btn btn-success" type="submit" value="Enviar">-->
                                        <button type="submit" value=" Send"  class="btn btn-success" id="submit">

                                    </div>
                                </form>
                            </nav>
                            </br>
                        </div>
                        </br>
                        <div>
                            <h2>reporte de grupo por llamadas entrantes</h2></br>
                            <iframe  frameborder="1"  name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/simple-3D-pie-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="1" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/stacked-3D-column-chart/index_grupo.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="1" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/drag-and-change-values/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                        </div>
                        <div>
                            <iframe frameborder="1" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/column-chart-with-axis-break/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>"></iframe>
                            <iframe frameborder="1" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/simple-bar-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="1" name="principal" width="30%" height="300" src="../amcharts4/examples/javascript/cylinder-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>"></iframe>
                        </div>
                        <div></br>
                            <h2>llamadas por agente</h2></br>
                            <iframe frameborder="1" name="principal" width="70%" height="500" src="../amcharts4/examples/javascript/stacked-3D-column-chart/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>
                            <iframe frameborder="1" name="principal" width="70%" height="500" src="../amcharts4/examples/javascript/column-chart-with-images-as-bullets/index.php?fecha1=<?php print $_GET["fecha1"] ?>&fecha2=<?php print $_GET["fecha2"] ?>&limite=<?php print $_GET["limite"] ?>"></iframe>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </center>
    <script>
        $("#individualModal").on("shown.bs.modal", function() {
            var urlReplace = "#" + $(this).attr('id');
            history.pushState(null, null, urlReplace);
        });

        // This code gets executed when the back button is clicked, hide any/open modals.
        $(window).on('popstate', function() {
            $("#individualModal").modal('hide');
        });
    </script>
</body>

</html>