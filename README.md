#RepRasp Repository

This is the main repository for RepRasp. A Touch Screen UI for 3D printers. ApePubSub is an alternative event driven pub/sub framework to the official [APE_JSF](https://github.com/APE-Project/APE_JSF) for the [APE Server](https://github.com/APE-Project/APE_Server). It is written in plain javascript.

The Repo is broken into a number of major sections.

## App Areas

1. /app/ - Web application
2. /libraries/ - Li3 libraries
3. /mobile/ - Mbile App
4. /mumford/ - admin area
5. /aws/ - Amazon Web Services
6. /comments/ - Commentics Comments
6. /reviews/ - Commentics Reviews

### System Requirements
In order to run the app you will need a basic setup. All Database(s) are hosted and do not need to be installed.

    Unix
    Apache 2.4 (or similiar webserver)
    PHP 5.5+
    PHP Modules [ postgre, mysql, cli ]
    Composer
    APE
  

### AJAX PUSH ENGINE [ APE ]
You will need to install the APE Server and the modified ApePubSub Framework.

