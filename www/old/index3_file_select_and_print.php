 
 &nbsp&nbsp&nbsp
 <a href="index.php"><img src="./img/glyphicons_457_transfer.png" border="0"></a>
 &nbsp
 <a href="index2.php"><img src="./img/glyphicons_195_circle_info.png" border="0"></a>
 &nbsp
 <a href="index3.php"><img src="./img/glyphicons_114_list.png" border="1"></a>
 &nbsp
 <a href="index4.php"><img src="./img/glyphicons_022_fire.png" border="0" ></a> 
 &nbsp
 <a href="index5.php"><img src="./img/glyphicons_186_move.png" border="0"></a>
 &nbsp
 <a href="index6.php"><img src="./img/glyphicons_366_security_camera.png" border="0"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" border="0"></a>


<?php
// get filename
$filename = $_GET['filename'];
// send POST message
exec("bash ./post_api_file_select_and_print.sh $filename");
?>
<hr>
<br>
<br>

<font color="#00ff00"><h3> &nbsp&nbsp Load and print ... </h3></font>
<meta http-equiv="refresh" content="5; URL=index7.php">