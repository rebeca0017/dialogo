<?php

/*******************/ ////////////*******DIBUJO DE TABLA ********//////////////*********************/
function ayer($query)
{
   include('../conexion_postgres/conexion01.php');

   echo '<form class="form-inline my-2 my-lg-0"  method="get"> ';
   echo '<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name= "busqueda"> ';
   echo '<input type="submit" value ="enviar"> </form>';

   $var = $_GET["busqueda"];


   $result = pg_query($query); // ejecuta la consulta dada por query en la conexión a la base de datos especificada por connection.
   $i = 0;
   echo '<table border="1" class="table" style =" width: 30%; height: 30%" id ="tabla_consulta">';
   echo '<thead class ="thead-dark"><tr>';

   while ($i < pg_num_fields($result)) //el numero de columnas tiene que ser mayor a cero 
   {
      $fieldName = pg_field_name($result, $i); //devuelve el nombre del campo asociado debe empezar desde cero 
      echo '<th>' . $fieldName .  '</th>'; //dibujamos el nombre del campo
      $i = $i + 1;
   }
   echo '</tr></thead>';
   $i = 0;
   while ($row = pg_fetch_row($result)) // obtiene una fila de datos a partir del resultado asociado con el identificador de resultado especificado y lo pone en variable row 
   {
      echo '<tr>';
      $count = count($row); //cuecomo poner condiciones en tablas cuando esta muy larga en htmlnta el numero de elementos de un array y lo asignamos en una variabl 
      $y = 0;
      while ($y < $count) //el numero de elementos de un array debe ser mayor a cero 
      {
         $c_row = current($row); //Devuelve el elemento actual en un array
         echo '<td>' . $c_row . '</td>'; //dibujamos el elemento actual del array 
         next($row); //Avanza el puntero interno un lugar a delante antes de devolver el valor del elemento. //devuelve el siguiente valor del array y avanza el puntero interno del array un lugar.
         $y = $y + 1; //aumentamos en uno 
      }
      echo '</tr>';
      $i = $i + 1;
   }
   pg_free_result($result); //libera la memoria y los datos asociados con el recurso de resultado de consulta PostgreSQL especificado
   echo '</table>';
}
$consulta = "select * from  public.coc_queue_answeredandabandoned_table('2019-02-01','2019-12-01')";
ayer( $consulta );
?>