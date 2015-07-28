# Copy this script on raspberry to this location
# sudo cp /mnt/smb1/_octopi/static/get_api_timelapse.sh /var/www

cd /tmp
wget -N 127.0.0.1:5000/api/timelapse
grep '"name":' timelapse | awk -F '"' '{print $4}' > var_timelapse
grep '"name":' timelapse | awk -F '"' '{print $4}' | nl > var_timelapse_with_line_number
grep '"name":' timelapse | awk -F '"' '{print $4}' | wc -l > var_timelapse_amount