#RepRasp Repository

![promo image](https://raw.githubusercontent.com/johnny13/RepRasp/master/assets/art/move.png)

###DEV REPO

Plugin Located Here [https://github.com/johnny13/OctoPrint-RepRasp](https://github.com/johnny13/OctoPrint-RepRasp)

This is not the main repository for the RepRasp Octoprint Plugin. This is only for developing. If you want to install the plugin you must use the octoprint ready repository. 

RepRasp itself is a A Touch Screen UI for 3D printers. It is a small screen ui for Octoprint. It uses nodejs to server the content. GruntJS Sass and Jade are all used in the build environment. If you have a RaspberryPi and a touchscreen then this is what you want!

The Repo is broken into a number of major sections.

###App Areas

1. /assets/ - support files. default config. copied over to webroot on build.
2. /commands/ - Startup script. Touch Screen Config. Desktop Icon Shortcut.
3. /jade/ - Page Templates
4. /www/ - website directory
5. /www/webroot/ - webroot for app js/css/imgs
6. /octoprint_reprasp/ - this is the folder that is built for octoprint. Build w/ grunt octoprint

![promo image](https://raw.githubusercontent.com/johnny13/RepRasp/master/assets/art/menu.png)

####Production vs Dev node modules

**npm install --production** is recommened for Raspberry Pi. Install all the dev libraries can take a very long time and is only neccessary if you want to modify the source code at all. If you simply want to run it and use it, you just need the gruntjs stuff. On your actual machine you can run **npm install --dev** and build and customize away.


##GruntJS Commands

If you would like to customize the UI you will need to run the **grunt dev** command. This will provide a live reload for your workspace. For the webserver, you can run **grunt server** command. If you are debugging / building, you can simply use Apache or nginx or whatever is on your dev machine. 

You will need to enable octoprint's cross-origin-resouce-sharing **CORS** API option [octoprint content-type](http://docs.octoprint.org/en/master/api/general.html#content-type) on OctoPrint if you are developing on a machine other than the local raspberry the octoprint server is running on.

    grunt connect:server    // run a simple web server. servers content from /www/


these commands requires **npm install --dev** and should not be run on the raspberry if it can be avoided (slow)

    grunt reset             // resets repo and rebuilds everything
    grunt dev               // live reload. edit sass and jade and have fun


to build out the octoprint ready version of RepRasp

    grunt octoprint

  
