#!/bin/sh
unclutter &
matchbox-window-manager &
chromium-browser --kiosk octopi.local:9001 &
cd /home/pi/RepRasp && /usr/local/bin/grunt connect:server

