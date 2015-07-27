# Copy this script on raspberry to this location
# sudo cp /mnt/smb1/_octopi/static/get_api_connection.sh /var/www

cd /tmp
wget -N 127.0.0.1:5000/api/connection
grep '"baudrate":' connection | awk -F ': '  '{print $2}' | sed 's/\,//g' > var_connection_baudrate
grep '"state":' connection | awk -F '"' '{print $4}' > var_connection_state
grep '"port":' connection | awk -F '"' '{print $4}' > var_connection_port

# write string from bash to file, used from php for comparison. This is to avoid comparison issues with different string formats (bash format vs php format)
echo "Operational" > var_connection_operational_string
echo "Printing" > var_connection_printing_string
echo "Paused" > var_connection_paused_string
echo "Closed" > var_connection_closed_string
echo "Error: Failed to open seria..." > var_connection_errorfailedtoopenserial_string