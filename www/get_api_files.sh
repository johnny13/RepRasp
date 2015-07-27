# Copy this script on raspberry to this location
# sudo cp /mnt/smb1/_octopi/static/get_api_files.sh /var/www

cd /tmp
wget -N 127.0.0.1:5000/api/files
grep '"name":' files | awk -F '"' '{print $4}' > var_files
grep '"name":' files | awk -F '"' '{print $4}' | nl > var_files_with_line_number
grep '"name":' files | awk -F '"' '{print $4}' | wc -l > var_files_amount


