# Copy this script on raspberry to this location
# sudo cp /mnt/smb1/_octopi/static/get_api_printer.sh /var/www

cd /tmp
wget -N 127.0.0.1:5000/api/printer
grep -m 1 '"actual":' printer | awk -F ': '  '{print $2}' | sed 's/\,//g' > var_printer_bed_actual_temp
grep '"actual":' printer | tail -1 | awk -F ': '  '{print $2}' | sed 's/\,//g' > var_printer_extruder_actual_temp

grep -m 1 '"target":' printer | awk -F ': '  '{print $2}' | sed 's/\,//g' > var_printer_bed_target_temp
grep '"target":' printer | tail -1 | awk -F ': '  '{print $2}' | sed 's/\,//g' > var_printer_extruder_target_temp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            