<?php
// get api data from script
exec("bash ./get_api_job.sh"); // bash is needed for this script to run when started from php !!!!
exec("bash ./get_api_connection.sh");
exec("bash ./get_api_printer.sh");
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
$var_job_percentage = round((($var_job_filepos_kb / $var_job_filesize_kb) * 100), 0);
$var_printer_bed_actual_temp = file_get_contents('/tmp/var_printer_bed_actual_temp');
$var_printer_bed_target_temp = file_get_contents('/tmp/var_printer_bed_target_temp');
$var_printer_extruder_actual_temp = file_get_contents('/tmp/var_printer_extruder_actual_temp');
$var_printer_extruder_target_temp = file_get_contents('/tmp/var_printer_extruder_target_temp');

?>

 &nbsp&nbsp&nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_24x22.png";} else { echo "./img/glyphicons_457_transfer.png"; }; ?> border="0"></a>
 &nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index2.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_26x26.png";} else { echo "./img/glyphicons_195_circle_info.png"; }; ?> border="0"></a>
 &nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index3.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_24x21.png";} else { echo "./img/glyphicons_114_list.png"; }; ?> border="0"></a>
 &nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index4.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_21x26.png";} else { echo "./img/glyphicons_022_fire.png"; }; ?> border="0" ></a> 
 &nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index5.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_24x24.png";} else { echo "./img/glyphicons_186_move.png"; }; ?> border="0"></a>
 &nbsp
 <a href=<?php if ($var_connection_state == $var_connection_printing_string) {echo "index7.php";} else { echo "index6.php"; }; ?>><img src=<?php if ($var_connection_state == $var_connection_printing_string) {echo "./img/blank_24x23.png";} else { echo "./img/glyphicons_366_security_camera.png"; }; ?> border="0"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" <?php if ($var_connection_state == $var_connection_printing_string) {echo "style=background-color:#00ff00";} else { echo " "; }; ?> border="1"></a>

<hr>

<h6>
State: <?php echo $var_connection_state; ?>
<br>
Hotend: <?php echo $var_printer_extruder_actual_temp.'°C / '.$var_printer_extruder_target_temp.'°C'; ?>
<br>
Bed: <?php echo $var_printer_bed_actual_temp.'°C / '.$var_printer_bed_target_temp.'°C'; ?>
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


<img src="./img/blank_26x26.png" style="height:1px; width:7px">
<INPUT TYPE="IMAGE" SRC="./img/glyphicons_174_pause@2x.png" STYLE="height:40px; width:40px" TITLE="PAUSE"
onClick="if(confirm('Are you sure to pause the print job?')) self.location.href='index7_job_pause.php'">


<img src="./img/blank_26x26.png" style="height:1px; width:20px">
<INPUT TYPE="IMAGE" SRC="./img/glyphicons_175_stop@2x.png" STYLE="height:40px; width:40px" TITLE="STOP"
onClick="if(confirm('Are you sure to cancel the print job?')) self.location.href='index7_job_cancel.php'">


<img src="./img/blank_26x26.png" style="height:1px; width:50px">
<INPUT TYPE="IMAGE" SRC="./img/glyphicons_365_restart@2x.png" STYLE="height:40px; width:40px" TITLE="REBOOT"
onClick="if(confirm('REBOOT SYSTEM?')) self.location.href='index7_reboot.php'">


<img src="./img/blank_26x26.png" style="height:1px; width:20px">
<INPUT TYPE="IMAGE" SRC="./img/glyphicons_063_power@2x.png" STYLE="height:40px; width:40px" TITLE="POWER OFF"
onClick="if(confirm('POWEROFF SYSTEM?')) self.location.href='index7_poweroff.php'">

</h6>

<script>
setTimeout(function() { window.location=window.location;},20000);
</script>