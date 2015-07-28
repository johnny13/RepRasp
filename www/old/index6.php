<script type="text/javascript">

// width = screen.width;		// screen.width ===> Bildschirmbreite bei Vollbild
// height = screen.height;		// screen.heigh ===> Bildschirmhöhe bei Vollbild

// width = screen.availWidth;		// screen.availWidth ===> verfügbare Bildschirmbreite
// height = screen.availHeight;		// screen.availHeigh ===> verfügbare Bildschirmhöhe

width = window.innerWidth;		// window.innerWidth ===> verfügbare Anzeige-Breite des Fensters
height = window.innerHeight;		// window.innerlHeigh ===> verfügbare Anzeige-Höhe des Fensters
appcodename = navigator.appCodeName;	// Spitzname des Browser
appname = navigator.appName;		// offizieller Name des Browsers
appversion = navigator.appVersion;	// Browser-Version
platform = navigator.platform;		// Plattform, auf der der Browser läuft

if (width > 0 && height >0) {
    window.location.href = "./index6a.php?width=" + width + "&height=" + height + "&appcodename=" + appcodename + "&appname=" + appname + "&appversion=" + appversion + "&platform=" + platform;
} else 
    exit();

</script>