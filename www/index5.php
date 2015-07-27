 
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="0"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="0"></a>
 &nbsp
 <a href="index3.php"><img src="./img/glyphicons_114_list.png" border="0"></a>
 &nbsp
 <a href="index4.php"><img src="./img/glyphicons_022_fire.png" border="0" ></a> 
 &nbsp
 <a href="index5.php"><img src="./img/glyphicons_186_move.png" border="1"></a>
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


<a href="index5.php"><img src="./img/blank_50x50.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5_printhead_up_10.php"><img src="./img/glyphicons_218_circle_arrow_top@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5.php"><img src="./img/blank_50x50.png" border="0" style="height:42px; width:42px" align="middle"></a>
&nbsp
<INPUT TYPE="BUTTON" VALUE="EXT +5" STYLE="height:30px; width:75px"
onClick="self.location.href='index5_printhead_extrude_5.php'">
&nbsp
<a href="index5_printhead_z-up_10.php"><img src="./img/glyphicons_218_circle_arrow_top@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>

<br>
<a href="index5_printhead_left_10.php"><img src="./img/glyphicons_216_circle_arrow_left@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5_printhead_xy-home.php"><img src="./img/glyphicons_020_home@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5_printhead_right_10.php"><img src="./img/glyphicons_217_circle_arrow_right@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>
&nbsp
<INPUT TYPE="BUTTON" VALUE="EXT +25" STYLE="height:30px; width:75px"
onClick="self.location.href='index5_printhead_extrude_25.php'">
&nbsp
<a href="index5_printhead_z-home.php"><img src="./img/glyphicons_020_home@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>

<br>
<a href="index5.php"><img src="./img/blank_50x50.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5_printhead_down_10.php"><img src="./img/glyphicons_219_circle_arrow_down@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>
<a href="index5.php"><img src="./img/blank_50x50.png" border="0" style="height:42px; width:42px" align="middle"></a>
&nbsp
<INPUT TYPE="BUTTON" VALUE="RET -5" STYLE="height:30px; width:75px"
onClick="self.location.href='index5_printhead_retract_5.php'">
&nbsp
<a href="index5_printhead_z-down_10.php"><img src="./img/glyphicons_219_circle_arrow_down@2x.png" border="0" style="height:42px; width:42px" align="middle"></a>

<hr>
&nbsp&nbsp&nbsp&nbsp
<INPUT TYPE="BUTTON" VALUE="Motors off" STYLE="height:30px; width:80px"
onClick="self.location.href='index5_printer_motors_off_M18.php'">
<INPUT TYPE="BUTTON" VALUE="Fans on" STYLE="height:30px; width:80px"
onClick="self.location.href='index5_printer_fans_on_M106.php'">
<INPUT TYPE="BUTTON" VALUE="Fans off" STYLE="height:30px; width:80px"
onClick="self.location.href='index5_printer_fans_off_M106-S0.php'">

<META HTTP-EQUIV="refresh" CONTENT="300">