<script type="text/javascript">

// width = screen.width;		// screen.width ===> Bildschirmbreite bei Vollbild
// height = screen.height;		// screen.heigh ===> Bildschirmh�he bei Vollbild

// width = screen.availWidth;		// screen.availWidth ===> verf�gbare Bildschirmbreite
// height = screen.availHeight;		// screen.availHeigh ===> verf�gbare Bildschirmh�he

width = window.innerWidth;		// window.innerWidth ===> verf�gbare Anzeige-Breite des Fensters
height = window.innerHeight;		// window.innerlHeigh ===> verf�gbare Anzeige-H�he des Fensters
appcodename = navigator.appCodeName;	// Spitzname des Browser
appname = navigator.appName;		// offizieller Name des Browsers
appversion = navigator.appVersion;	// Browser-Version
platform = navigator.platform;		// Plattform, auf der der Browser l�uft

if (width > 0 && height >0) {
    window.location.href = "./index6a.php?width=" + width + "&height=" + height + "&appcodename=" + appcodename + "&appname=" + appname + "&appversion=" + appversion + "&platform=" + platform;
} else 
    exit();

</script>