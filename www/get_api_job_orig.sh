# Copy this script on raspberry to this location
# sudo cp /mnt/smb1/_octopi/static/get_api_job.sh /var/www
echo test > /tmp/test.txt
# Bash function to convert seconds in hh:mm:ss
convertsecs() {
 ((h=${1}/3600))
 ((m=(${1}%3600)/60))
 ((s=${1}%60))
 printf "%02d:%02d:%02d\n" $h $m $s
}

cd /tmp
wget -N 127.0.0.1:5000/api/job

# GCode Filename
grep '"name":' job | awk -F '"' '{print $4}' > var_job_filename

# Filament Length [cm]
length=$(grep '"length":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}')
echo "scale=2; $length/10" | bc > var_job_filament_length_cm

# Filament Volume [cm³]
volume=$(grep '"volume":' job |  awk -F ': '  '{print $2}' | sed 's/\,//g')
echo "scale=2; $volume/1" | bc > var_job_filament_volume_cm3

# Grab estimated print time and convert from seconds to hh:mm:ss
estimatedprinttime=$(grep '"estimatedPrintTime":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}')
convertsecs $estimatedprinttime > var_job_estimatedprinttime_hhmmss

# Grab print time and convert from seconds to hh:mm:ss
printtime=$(grep '"printTime":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}' | sed 's/\,//g')
convertsecs $printtime > var_job_printtime_hhmmss

# Grab print time left and convert from seconds to hh:mm:ss
printtimeleft=$(grep '"printTimeLeft":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}')
convertsecs $printtimeleft > var_job_printtimeleft_hhmmss

# Grab filesize and convert from Bytes to KB
filesize=$(grep '"size":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}')
echo "scale=2; $filesize/1024" | bc > var_job_filesize_kb

# Grab file position (already printed KB) and convert from Bytes to KB
filepos=$(grep '"filepos":' job |  awk -F ': '  '{print $2}' | awk -F '.' '{print $1}' | sed 's/\,//g')
echo "scale=2; $filepos/1024" | bc > var_job_filepos_kb

# write string from bash to file, used from php for comparison. This is to avoid comparison issues with different string formats (bash format vs php format)
echo "Operational" > var_connection_operational_string
echo "Printing" > var_connection_printing_string
echo "Paused" > var_connection_paused_string