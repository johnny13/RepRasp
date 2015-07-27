 
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="0"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="0"></a>
 &nbsp
 <a href="index3.php"><img src="./img/glyphicons_114_list.png" border="0"></a>
 &nbsp
 <a href="index4.php"><img src="./img/glyphicons_022_fire.png" border="1" ></a> 
 &nbsp
 <a href="index5.php"><img src="./img/glyphicons_186_move.png" border="0"></a>
 &nbsp
 <a href="index6.php"><img src="./img/glyphicons_366_security_camera.png" border="0"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" border="0"></a>


<?php
// get api data from script
exec("bash ./get_api_printer.sh");
// load variable from file
$var_printer_bed_actual_temp = round(file_get_contents('/tmp/var_printer_bed_actual_temp'), 0);
$var_printer_bed_target_temp = round(file_get_contents('/tmp/var_printer_bed_target_temp'), 0);
$var_printer_extruder_actual_temp = round(file_get_contents('/tmp/var_printer_extruder_actual_temp'), 0);
$var_printer_extruder_target_temp = round(file_get_contents('/tmp/var_printer_extruder_target_temp'), 0);

?>
<hr>

<FORM>

<table border="1">
  <colgroup>
    <col width="40">
    <col width="55">
    <col width="55">
    <col width="130">
  </colgroup>
  <tr align="center">
    <td><h6></td>
    <td><h6>Actual</td>
    <td><h6>Target</td>
    <td><h6>Set</td>
  </tr>
  <tr align="center">
    <td><h6>Hotend</td>
    <td align="center"><h6><?php echo $var_printer_extruder_actual_temp.'°C'; ?></td>
    <td align="center"><h6><?php echo $var_printer_extruder_target_temp.'°C'; ?></td>
    <td><h6><SELECT NAME="list1" TITLE="Hotend Temperature in °C" STYLE="height:30px">
            <OPTION VALUE="index4_set_extruder_temp_180.php">180°C
            <OPTION SELECTED VALUE="index4_set_extruder_temp_190.php">190°C
            <OPTION VALUE="index4_set_extruder_temp_200.php">200°C
            <OPTION VALUE="index4_set_extruder_temp_210.php">210°C
            <OPTION VALUE="index4_set_extruder_temp_220.php">220°C
            <OPTION VALUE="index4_set_extruder_temp_0.php">off
            </SELECT>
            <INPUT TYPE="BUTTON" VALUE="SET" STYLE="height:30px; width:40px" onClick="self.location.href=this.form.list1.options[this.form.list1.selectedIndex].value"></td>
  </tr>
  <tr align="center">
    <td><h6>Bed</td>
    <td align="center"><h6><?php echo $var_printer_bed_actual_temp.'°C'; ?></td>
    <td align="center"><h6><?php echo $var_printer_bed_target_temp.'°C'; ?></td>
    <td><h6><SELECT NAME="list2" TITLE="Bed Temperature in °C" STYLE="height:30px">
            <OPTION VALUE="index4_set_bed_temp_30.php">&nbsp&nbsp30°C
            <OPTION SELECTED VALUE="index4_set_bed_temp_35.php">&nbsp&nbsp35°C
            <OPTION VALUE="index4_set_bed_temp_40.php">&nbsp&nbsp40°C
            <OPTION VALUE="index4_set_bed_temp_45.php">&nbsp&nbsp45°C
            <OPTION VALUE="index4_set_bed_temp_50.php">&nbsp&nbsp50°C
            <OPTION VALUE="index4_set_bed_temp_0.php">&nbsp&nbspoff
            </SELECT>
            <INPUT TYPE="BUTTON" VALUE="SET" STYLE="height:30px; width:40px" onClick="self.location.href=self.location.href=this.form.list2.options[this.form.list2.selectedIndex].value"></td>
  </tr>
  <!-- usw. andere Zeilen der Tabelle -->
</table>

</FORM>
<script>
setTimeout(function() { window.location=window.location;},30000);
</script>