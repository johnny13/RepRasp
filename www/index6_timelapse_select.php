
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="0"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="0"></a>
 &nbsp
 <a href="index3.php"><img src="./img/glyphicons_114_list.png" border="0"></a>
 &nbsp
 <a href="index4.php"><img src="./img/glyphicons_022_fire.png" border="0" ></a> 
 &nbsp
 <a href="index5.php"><img src="./img/glyphicons_186_move.png" border="0"></a>
 &nbsp
 <a href="index6.php"><img src="./img/glyphicons_366_security_camera.png" border="1"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" border="0"></a>


<?php
// get api data from script
exec("bash ./get_api_timelapse.sh");
// load variable from file
//$var_files = file_get_contents('/tmp/var_files');
//$var_files_with_line_number = file_get_contents('/tmp/var_files_with_line_number');
$var_files = file('/tmp/var_timelapse');
$var_files_amount = file_get_contents('/tmp/var_timelapse_amount');

?>
<hr>

<u>Timelapse Files ( <?php echo $var_files_amount;?>):</u>
<br>
<FORM>
<SELECT NAME="list1" TITLE="Timelapse Files"  SIZE="5" >
            <OPTION  SELECTED VALUE=<?php echo $var_files[0]; ?> > <?php echo substr($var_files[0], 0, 35); ?>
<?php if ($var_files_amount >= 2) {echo "<OPTION VALUE="; echo $var_files[1]; echo " > "; echo substr($var_files[1], 0, 35);} ?>
<?php if ($var_files_amount >= 3) {echo "<OPTION VALUE="; echo $var_files[2]; echo " > "; echo substr($var_files[2], 0, 35);} ?>
<?php if ($var_files_amount >= 4) {echo "<OPTION VALUE="; echo $var_files[3]; echo " > "; echo substr($var_files[3], 0, 35);} ?>
<?php if ($var_files_amount >= 5) {echo "<OPTION VALUE="; echo $var_files[4]; echo " > "; echo substr($var_files[4], 0, 35);} ?>
<?php if ($var_files_amount >= 6) {echo "<OPTION VALUE="; echo $var_files[5]; echo " > "; echo substr($var_files[5], 0, 35);} ?>
<?php if ($var_files_amount >= 7) {echo "<OPTION VALUE="; echo $var_files[6]; echo " > "; echo substr($var_files[6], 0, 35);} ?>
<?php if ($var_files_amount >= 8) {echo "<OPTION VALUE="; echo $var_files[7]; echo " > "; echo substr($var_files[7], 0, 35);} ?>
<?php if ($var_files_amount >= 9) {echo "<OPTION VALUE="; echo $var_files[8]; echo " > "; echo substr($var_files[8], 0, 35);} ?>
<?php if ($var_files_amount >= 10) {echo "<OPTION VALUE="; echo $var_files[9]; echo " > "; echo substr($var_files[9], 0, 35);} ?>
<?php if ($var_files_amount >= 11) {echo "<OPTION VALUE="; echo $var_files[10]; echo " > "; echo substr($var_files[10], 0, 35);} ?>
<?php if ($var_files_amount >= 12) {echo "<OPTION VALUE="; echo $var_files[11]; echo " > "; echo substr($var_files[11], 0, 35);} ?>
<?php if ($var_files_amount >= 13) {echo "<OPTION VALUE="; echo $var_files[12]; echo " > "; echo substr($var_files[12], 0, 35);} ?>
<?php if ($var_files_amount >= 14) {echo "<OPTION VALUE="; echo $var_files[13]; echo " > "; echo substr($var_files[13], 0, 35);} ?>
<?php if ($var_files_amount >= 15) {echo "<OPTION VALUE="; echo $var_files[14]; echo " > "; echo substr($var_files[14], 0, 35);} ?>
<?php if ($var_files_amount >= 16) {echo "<OPTION VALUE="; echo $var_files[15]; echo " > "; echo substr($var_files[15], 0, 35);} ?>
<?php if ($var_files_amount >= 17) {echo "<OPTION VALUE="; echo $var_files[16]; echo " > "; echo substr($var_files[16], 0, 35);} ?>
<?php if ($var_files_amount >= 18) {echo "<OPTION VALUE="; echo $var_files[17]; echo " > "; echo substr($var_files[17], 0, 35);} ?>
<?php if ($var_files_amount >= 19) {echo "<OPTION VALUE="; echo $var_files[18]; echo " > "; echo substr($var_files[18], 0, 35);} ?>
<?php if ($var_files_amount >= 20) {echo "<OPTION VALUE="; echo $var_files[19]; echo " > "; echo substr($var_files[19], 0, 35);} ?>
<?php if ($var_files_amount >= 21) {echo "<OPTION VALUE="; echo $var_files[20]; echo " > "; echo substr($var_files[20], 0, 35);} ?>
<?php if ($var_files_amount >= 22) {echo "<OPTION VALUE="; echo $var_files[21]; echo " > "; echo substr($var_files[21], 0, 35);} ?>
<?php if ($var_files_amount >= 23) {echo "<OPTION VALUE="; echo $var_files[22]; echo " > "; echo substr($var_files[22], 0, 35);} ?>
<?php if ($var_files_amount >= 24) {echo "<OPTION VALUE="; echo $var_files[23]; echo " > "; echo substr($var_files[23], 0, 35);} ?>
<?php if ($var_files_amount >= 25) {echo "<OPTION VALUE="; echo $var_files[24]; echo " > "; echo substr($var_files[24], 0, 35);} ?>
<?php if ($var_files_amount >= 26) {echo "<OPTION VALUE="; echo $var_files[25]; echo " > "; echo substr($var_files[25], 0, 35);} ?>
<?php if ($var_files_amount >= 27) {echo "<OPTION VALUE="; echo $var_files[26]; echo " > "; echo substr($var_files[26], 0, 35);} ?>
<?php if ($var_files_amount >= 28) {echo "<OPTION VALUE="; echo $var_files[27]; echo " > "; echo substr($var_files[27], 0, 35);} ?>
<?php if ($var_files_amount >= 29) {echo "<OPTION VALUE="; echo $var_files[28]; echo " > "; echo substr($var_files[28], 0, 35);} ?>
<?php if ($var_files_amount >= 30) {echo "<OPTION VALUE="; echo $var_files[29]; echo " > "; echo substr($var_files[29], 0, 35);} ?>
<?php if ($var_files_amount >= 31) {echo "<OPTION VALUE="; echo $var_files[30]; echo " > "; echo substr($var_files[30], 0, 35);} ?>
<?php if ($var_files_amount >= 32) {echo "<OPTION VALUE="; echo $var_files[31]; echo " > "; echo substr($var_files[31], 0, 35);} ?>
<?php if ($var_files_amount >= 33) {echo "<OPTION VALUE="; echo $var_files[32]; echo " > "; echo substr($var_files[32], 0, 35);} ?>
<?php if ($var_files_amount >= 34) {echo "<OPTION VALUE="; echo $var_files[33]; echo " > "; echo substr($var_files[33], 0, 35);} ?>
<?php if ($var_files_amount >= 35) {echo "<OPTION VALUE="; echo $var_files[34]; echo " > "; echo substr($var_files[34], 0, 35);} ?>
<?php if ($var_files_amount >= 36) {echo "<OPTION VALUE="; echo $var_files[35]; echo " > "; echo substr($var_files[35], 0, 35);} ?>
<?php if ($var_files_amount >= 37) {echo "<OPTION VALUE="; echo $var_files[36]; echo " > "; echo substr($var_files[36], 0, 35);} ?>
<?php if ($var_files_amount >= 38) {echo "<OPTION VALUE="; echo $var_files[37]; echo " > "; echo substr($var_files[37], 0, 35);} ?>
<?php if ($var_files_amount >= 39) {echo "<OPTION VALUE="; echo $var_files[38]; echo " > "; echo substr($var_files[38], 0, 35);} ?>
<?php if ($var_files_amount >= 40) {echo "<OPTION VALUE="; echo $var_files[39]; echo " > "; echo substr($var_files[39], 0, 35);} ?>
<?php if ($var_files_amount >= 41) {echo "<OPTION VALUE="; echo $var_files[40]; echo " > "; echo substr($var_files[40], 0, 35);} ?>
<?php if ($var_files_amount >= 42) {echo "<OPTION VALUE="; echo $var_files[41]; echo " > "; echo substr($var_files[41], 0, 35);} ?>
<?php if ($var_files_amount >= 43) {echo "<OPTION VALUE="; echo $var_files[42]; echo " > "; echo substr($var_files[42], 0, 35);} ?>
<?php if ($var_files_amount >= 44) {echo "<OPTION VALUE="; echo $var_files[43]; echo " > "; echo substr($var_files[43], 0, 35);} ?>
<?php if ($var_files_amount >= 45) {echo "<OPTION VALUE="; echo $var_files[44]; echo " > "; echo substr($var_files[44], 0, 35);} ?>
<?php if ($var_files_amount >= 46) {echo "<OPTION VALUE="; echo $var_files[45]; echo " > "; echo substr($var_files[45], 0, 35);} ?>
<?php if ($var_files_amount >= 47) {echo "<OPTION VALUE="; echo $var_files[46]; echo " > "; echo substr($var_files[46], 0, 35);} ?>
<?php if ($var_files_amount >= 48) {echo "<OPTION VALUE="; echo $var_files[47]; echo " > "; echo substr($var_files[47], 0, 35);} ?>
<?php if ($var_files_amount >= 49) {echo "<OPTION VALUE="; echo $var_files[48]; echo " > "; echo substr($var_files[48], 0, 35);} ?>
<?php if ($var_files_amount >= 50) {echo "<OPTION VALUE="; echo $var_files[49]; echo " > "; echo substr($var_files[49], 0, 35);} ?>
            </SELECT>

<br>
<br>
<INPUT TYPE="BUTTON" VALUE="BACK" STYLE="height:30px; width:120px"
onClick="self.location.href='index6.php'">
&nbsp&nbsp&nbsp&nbsp&nbsp
<INPUT TYPE="BUTTON" VALUE="PLAY VIDEO" STYLE="height:30px; width:120px"
onClick="self.location.href='index6_timelapse_play.php?filename=' + this.form.list1.options[this.form.list1.selectedIndex].value">

</FORM>

<META HTTP-EQUIV="refresh" CONTENT="60">