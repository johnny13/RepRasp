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
 <a href="index6_timelapse_select.php"><img src="./img/glyphicons_366_security_camera.png" border="1"></a>
 &nbsp
 <a href="index7.php"><img src="./img/glyphicons_015_print.png" border="0"></a>


<?php
  $width = $_GET['width'];
  $height = $_GET['height'];
  $appcodename = $_GET['appcodename'];
  $appname = $_GET['appname'];
  $appversion = $_GET['appversion']; // Contains "Midori"
  $platform = $_GET['platform'];
  
  // Check if used broswer is Midori Browser. If yes, then forward to Midori optimized webpage (Change webcam STREAM to SNAPSHOT)
  if (strpos($appversion,'Midori')) {header('Location: index6a_midori.php');} ;
?>
<hr>

&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
 <a href="index6_fullscreen.php"><img alt="" src="http://127.0.0.1:8080/?action=stream" width="220" height="165" />