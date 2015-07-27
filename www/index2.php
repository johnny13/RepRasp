 
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="0"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="1"></a>
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
exec("bash ./get_api_job.sh"); // bash is needed for this script to run when started from php !!!!
exec("bash ./get_api_connection.sh");
// load variable from file
$var_connection_baudrate = file_get_contents('/tmp/var_connection_baudrate');
$var_connection_port = file_get_contents('/tmp/var_connection_port');
$var_connection_state = file_get_contents('/tmp/var_connection_state');
$var_connection_operational_string = file_get_contents('/tmp/var_connection_operational_string');		// get string from bash cmd to avoid comparison issues with different string formats (bash format vs php format)

$var_job_filename = substr(file_get_contents('/tmp/var_job_filename'),0, 35);  // Limit digits in string with substr command to prevent screen size overshooting
$var_job_filament_length_cm = file_get_contents('/tmp/var_job_filament_length_cm');
$var_job_filament_volume_cm3 = file_get_contents('/tmp/var_job_filament_volume_cm3');
$var_job_estimatedprinttime_hhmmss = file_get_contents('/tmp/var_job_estimatedprinttime_hhmmss');
$var_job_printtime_hhmmss = file_get_contents('/tmp/var_job_printtime_hhmmss');
$var_job_printtimeleft_hhmmss = file_get_contents('/tmp/var_job_printtimeleft_hhmmss');
$var_job_filesize_kb = file_get_contents('/tmp/var_job_filesize_kb');
$var_job_filepos_kb = file_get_contents('/tmp/var_job_filepos_kb');
$var_connection_printing_string = file_get_contents('/tmp/var_connection_printing_string');
$var_connection_closed_string = file_get_contents('/tmp/var_connection_closed_string');
$var_connection_errorfailedtoopenserial_string = file_get_contents('/tmp/var_connection_errorfailedtoopenserial_string');

$var_job_percentage = round((($var_job_filepos_kb / $var_job_filesize_kb) * 100), 0);
?>
<hr>

<h6>
State: <?php echo $var_connection_state; ?>
<br>
File: <?php echo $var_job_filename; ?>
<br>
Filament: <?php echo $var_job_filament_length_cm.'cm / '.$var_job_filament_volume_cm3.'cm³'; ?>
<br>
Estimated Print Time: <?php echo $var_job_estimatedprinttime_hhmmss; ?>
<br>
Print Time: <?php echo $var_job_printtime_hhmmss.'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Left: '.$var_job_printtimeleft_hhmmss; ?>
<br>
Printed: <?php echo $var_job_filepos_kb.'KB &nbsp / &nbsp '.$var_job_filesize_kb.'KB &nbsp / &nbsp '.$var_job_percentage.'%'; ?>

<br>
<br>

&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<INPUT TYPE=<?php if ($var_connection_state == $var_connection_operational_string AND strlen($var_job_filename) < 2) {echo "BUTTON";} else { echo "HIDDEN"; };  ?> VALUE="NO FILE SELECTED" STYLE="height:50px; width:240px; background-color:#ff0000"
onClick="self.location.href='index3.php'">

<INPUT TYPE=<?php if ($var_connection_state == $var_connection_operational_string AND strlen($var_job_filename) >= 2) {echo "BUTTON";} else { echo "HIDDEN"; };  ?> VALUE="START PRINTING" STYLE="height:50px; width:240px; background-color:#00ff00"
onClick="self.location.href='index2_start_printing.php'">

<INPUT TYPE=<?php if ($var_connection_state == $var_connection_closed_string) {echo "BUTTON";} else { echo "HIDDEN"; };  ?> VALUE="PRINTER DISCONNECTED" STYLE="height:50px; width:240px; background-color:#ff0000"
onClick="self.location.href='index.php'">

<INPUT TYPE=<?php if ($var_connection_state == $var_connection_errorfailedtoopenserial_string) {echo "BUTTON";} else { echo "HIDDEN"; };  ?> VALUE="PRINTER DISCONNECTED" STYLE="height:50px; width:240px; background-color:#ff0000"
onClick="self.location.href='index.php'">

</h6>

<script>
setTimeout(function() { window.location=window.location;},10000);
</script>