<?php
 
function consulta($query){
    include('conexion01.php');
    $resultado = pg_query($query) or die('Error: ' . pg_last_error());
    $data = array();
    while ($row = pg_fetch_assoc($resultado)) {
        $data[] = $row;
        }
    echo json_encode($data);
}

?>