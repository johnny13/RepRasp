clear
cd /home/pi
echo ################
echo # START WEBCAM #
echo ################
/usr/local/bin/mjpg_streamer -i "/usr/local/lib/input_raspicam.so -fps 5" -o "/usr/local/lib/output_http.so" &
echo Webcam started!
sleep 1
echo ###################
echo # START OCTOPRINT #
echo ###################
octoprint &
sleep 1
echo #####################
echo # START RPi-Display #
echo #####################
./start_chrome_fullscreen.sh
#./start_midori_fullscreen.sh