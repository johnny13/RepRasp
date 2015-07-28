#RepRasp Repository

![promo image](https://raw.githubusercontent.com/johnny13/RepRasp/master/assets/art/1.png)

###WORK IN PROGRESS 

This is the main repository for RepRasp. A Touch Screen UI for 3D printers. It is a small screen ui for Octoprint. It uses nodejs to server the content. GruntJS Sass and Jade are all used in the build environment. If you have a RaspberryPi and a touchscreen then this is what you want!

The Repo is broken into a number of major sections.

###App Areas

1. /assets/ - support files. default config. copied over to webroot on build.
2. /commands/ - Startup script. Touch Screen Config. Desktop Icon Shortcut.
3. /jade/ - Page Templates
4. /www/ - website directory
5. /www/webroot/ - webroot for app js/css/imgs

**Dont Forget** /assets/files/defaults.json has to be manually configured.

##Modify OctoPi / OctoPrint

If you already have a working OctoPrint setup, or a standard OctoPi install, this process will simple. If you do not already have OctoPi running in some fashion, you will need to get that setup first. Otherwise we are simply going to install some javascript files to take advantage of the REST API that is already present.

###Port 80 
Its recommened that you use port 80 for your main octoprint server, and let the RepRasp software run on a different port. If you're octopi.local requires you to have **octopi.local:5000** in a web browser then you need to follow this guide [port 80 octoprint](https://github.com/foosel/OctoPrint/wiki/Setup-on-a-Raspberry-Pi-running-Raspbian#make-everything-accessible-on-port-80)

###Install RepRasp

Assuming you are on raspian debian or such arm distro [raspberry-pi-nodejs](http://weworkweplay.com/play/raspberry-pi-nodejs/). 

Basically to install nodejs and node package manager (npm) on raspian  
  
    wget http://weworkweplay.com/play/raspberry-pi-nodejs/
    sudo dpkg -i node_latest_armhf.deb
    npm config set registry http://registry.npmjs.org/
    npm config set strict-ssl false
  

Now that your npm is installed and configured you should be able to test it out by install the GruntJS command line package.
Then finally you can clone the RepRasp repository and get started.

    npm install -g grunt-cli
    git clone https://github.com/johnny13/RepRasp
    cd RepRasp
    npm install --production
    nano /assets/files/defaults.json //put in your api key
  
Once all of those commands are finished you should have a repository stuffed with a bunch of node modules. At this point you still need to manually set the server details in the **files/defaults.json** and from there on out all you need to do is serve the HTML files to a web browser.

![promo image](https://raw.githubusercontent.com/johnny13/RepRasp/master/assets/art/2.png)

####Production vs Dev node modules

**npm install --production** is recommened for Raspberry Pi. Install all the dev libraries can take a very long time and is only neccessary if you want to modify the source code at all. If you simply want to run it and use it, you just need the gruntjs stuff. On your actual machine you can run **npm install --dev** and build and customize away.


##GruntJS Commands

If you would like to customize the UI you will need to run the **grunt dev** command. This will provide a live reload for your workspace. For the webserver, you can run **grunt server** command. If you are debugging / building, you can simply use Apache or nginx or whatever is on your dev machine. 

You will need to enable octoprint's cross-origin-resouce-sharing **CORS** API option [octoprint content-type](http://docs.octoprint.org/en/master/api/general.html#content-type) on OctoPrint if you are developing on a machine other than the local raspberry the octoprint server is running on.

    grunt connect:server    // run a simple web server. servers content from /www/
    
these commands requires **npm install --dev** and should not be run on the raspberry if it can be avoided (slow)

    grunt reset             // resets repo and rebuilds everything
    grunt dev               // live reload. edit sass and jade and have fun

