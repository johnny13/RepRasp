 
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
// get filename
$filename = $_GET['filename'];
// send POST message
exec("./play_timelapse_mplayer.sh $filename");
?>
<hr>
<br>
<br>

&nbsp&nbsp&nbsp&nbsp&nbsp
<INPUT TYPE="BUTTON" VALUE="BACK" STYLE="height:120px; width:240px"
onClick="self.location.href='index6.php'">