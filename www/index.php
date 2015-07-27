 
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="1"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="0"></a>
 &nbsp
 <a href="index3.php"><img src="./img/glyphicons_114_list.png" border="0"></a>
 &nbsp
 <a href="index4.php"><img src="./img/glyphicons_022_fire.png" border="0" ></a> 
 &nbsp
 <a href="index5.php"><img src="./img/glyphicons_186_move.png" border="0"></a>
 &nbsp
 <a href="index6.php"><img src="./img/glyphicons_366_security_camera.png" border="0"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" border="0"></a>


<?php
// get api data from script
exec("./get_api_connection.sh");
// load variable from file
$var_connection_baudrate = file_get_contents('/tmp/var_connection_baudrate');
$var_connection_port = file_get_contents('/tmp/var_connection_port');
$var_connection_state = file_get_contents('/tmp/var_connection_state');
$var_connection_operational_string = file_get_contents('/tmp/var_connection_operational_string');		// get string from bash cmd to avoid comparison issues with different string formats (bash format vs php format)
//$var_connection_state = "Operational";

?>
<hr>
<br>

&nbsp&nbsp Baudrate: <?php echo $var_connection_baudrate; ?>
<br>
&nbsp&nbsp Port: <?php echo $var_connection_port; ?>
<br>
&nbsp&nbsp State: <?php echo $var_connection_state; ?>

<br>
<br>
&nbsp&nbsp&nbsp&nbsp&nbsp
<INPUT TYPE=<?php if ($var_connection_state == $var_connection_operational_string) {echo "HIDDEN";} else { echo "BUTTON"; };  ?> VALUE="CONNECT" STYLE="height:50px; width:240px"
onClick="self.location.href='index_connect.php'">

<INPUT TYPE=<?php if ($var_connection_state != $var_connection_operational_string) {echo "HIDDEN";} else { echo "BUTTON"; };  ?> VALUE="DISCONNECT" STYLE="height:50px; width:240px"
onClick="self.location.href='index_disconnect.php'">



<br>
<br>



<script>
setTimeout(function() { window.location=window.location;},10000);
</script>