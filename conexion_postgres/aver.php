<?php

function oye01($oye,$como){
    include('consulta01.php');
            //$fecha1 = $_POST[$oye];
            //$fecha2 = $_POST[$como];
            //$fecha1 ='2019-02-01';
            //$fecha2 ='2019-12-01';
            $consulta = "select * from  aver('$oye','$como')";
            consulta($consulta);
}
$fecha1 = '01-02-2019';
$fecha2 = '01-03-2019';

oye01($fecha1,$fecha2 )
?>