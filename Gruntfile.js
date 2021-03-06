/*!
 * RepRasp Party Like a Rockstar Gruntfile
 * huement.com/reprasp
 * @author Derek Scott
*/

/**
 * Grunt Module
*/
module.exports = function (grunt) {
  'use strict';
  grunt.template.addDelimiters('handlebars-like-delimiters', '{{', '}}');
  // Project configuration.
  grunt.initConfig({
  // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    /**
     * Project banner
     */
    tag: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' License: <%= pkg.license.type %> */' + "\n",
      bootbanner: "\n" + "/*! -- I Built This. Dont Hate. -- */" + "\n" + "\n" + "\n"
    },
    jqueryCheck: 'if (!jQuery) { throw new Error(\"HUI requires jQuery\") }\\n\\n',
    // Task configuration.
    clean: {
      dist: ['cache']
    },
    /*
    * Grunt Copy
    * used for moving assests to dist
    */
    copy: {
      config: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, flatten: true, src: ['assets/files/**'], dest: 'www/webroot/files', filter: 'isFile'}
        ]
      },
      octoprint: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, flatten: true, src: ['www/webroot/css/**'], dest: 'octoprint_reprasp/static/css', filter: 'isFile'},
          {expand: true, flatten: true, src: ['www/webroot/js/**'], dest: 'octoprint_reprasp/static/js', filter: 'isFile'},
          {expand: true, flatten: true, src: ['www/webroot/files/**.png'], dest: 'octoprint_reprasp/static/img', filter: 'isFile'},
          {expand: true, flatten: true, src: ['www/webroot/fonts/**'], dest: 'octoprint_reprasp/static/fonts', filter: 'isFile'},
          {expand: true, flatten: true, src: ['www/webroot/status.html'], dest: 'octoprint_reprasp/static', filter: 'isFile'},
          {expand: true, flatten: true, src: ['www/**.html'], dest: 'octoprint_reprasp/templates', filter: 'isFile'}
        ]
      }
    },
    rename: {
        dupit: {
            src: 'octoprint_reprasp/templates/octoprint.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_index.jinja2'
        },

        // Any number of targets here... 

        dupitcontrol: {
            src: 'octoprint_reprasp/templates/control.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_control.jinja2'
        },
        
        dupitstatus: {
            src: 'octoprint_reprasp/templates/status.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_status.jinja2'
        },
        
        dupitprint: {
            src: 'octoprint_reprasp/templates/print.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_print.jinja2'
        },
        
        dupitterminal: {
            src: 'octoprint_reprasp/templates/terminal.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_terminal.jinja2'
        },
        
        dupitsettings: {
            src: 'octoprint_reprasp/templates/settings.html',
            dest: 'octoprint_reprasp/templates/reprasp_ui_settings.jinja2'
        },
        nf3: {
            src: 'octoprint_reprasp/static/js/RepRasp.js',
            dest: 'octoprint_reprasp/static/js/reprasp-main.js'
        }
    },
    /**
     * Sass ( optional Compass )
     *
     * You can set the Compass Option to True. However you need Ruby-compass gems and other requirements.
     * I was able to get it working w/ homebrew on my mac, but 13.10 ubuntu had issues
     *
     * It probably will work for you w/o it on. Its defaulted to off.
     *
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
			'assets/stylesheets/hui_built.css': 'assets/stylesheets/hui.scss'
        }
      }
    },
    /*
    * Minify CSS Files
    */
    cssmin: {
      minify: {
      options: {
        banner: '<%= pkg.name %>-<%= pkg.version %>',
      },
      files: {
          'www/webroot/css/<%= pkg.name %>.min.css': ['assets/stylesheets/hui_built.css']
      }
      },
    },
    /*
    * Combine Sass Files
    */
	concat: {
      options: {
        banner: '<%= tag.banner %> <%= tag.bootbanner %>',
        stripBanners: false
      },
      javascript: {
        src: [
          'assets/javascripts/actions.js', // command logic
          'assets/javascripts/print_functions.js', // page specific functions
          'assets/javascripts/docready.js' // setup each page and globals
        ],
        dest: 'www/webroot/js/<%= pkg.name %>.js'
      },
      stylesheets: {
	    src: ['assets/stylesheets/hui_built.css'],
	    dest: 'www/webroot/css/<%= pkg.name %>.css',
	  },
    },
    /*
    * Jade Templates
    * Compile Jade Templates using package.json data
    *
    * Used for creating the documentation
    */
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true,
          data: require('./package.json')
          //,delimiters: 'handlebars-like-delimiters'
        },
        files: [ {
          cwd: "jade",
          src: ["**/index.jade", "**/status.jade", "**/print.jade", "**/control.jade", "**/terminal.jade", "**/settings.jade", "**/octoprint.jade"],
          dest: "www",
          expand: true,
          ext: ".html",

          rename: function () {
            // use the source directory to create the file
            // example with your directory structure
            var Xdest = '', src = 'www/webroot/index.html/*';
            return Xdest + src.substring(0, src.indexOf('/'));
          }
        } ]
      }
    },
    /*
    * Watch - not setup by default
    */
    watch: {
      sass: {
        files: 'assets/stylesheets/{,*/}*.{scss,sass}',
        tasks: ['sass', 'cssmin', 'concat:stylesheets']
      },
      jadedocs: {
        files: 'jade/{,*/}*.{html,jade}',
        tasks: ['jade']
      },
      js: {
        files: 'assets/javascripts/{,*/}*.{js,json}',
        tasks: ['concat:javascript', 'copy:config', 'uglify']
      }
    },
    /*
    * Minify Final Javascript Results
    */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.homepage %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'www/webroot/js/<%= pkg.name %>.js',
        dest: 'www/webroot/js/<%= pkg.name %>.min.js'
      }
    },
    connect: {
      server: {
        options: {
        port: 9001,
        keepalive: true,
        base: {
          path: 'www',
          options: {
            index: 'index.html',
            maxAge: 300000
          }
        }
      }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename');
	
  /**
   * Load Grunt plugins.
   * call these from the command line, or just grunt for default.
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.registerTask('default', ['reset','connect']);
  
  // Command You run when you're editing the documentation
  grunt.registerTask('dev', ['jade', 'watch']);
	
  // Command You run when you're editing the documentation
  grunt.registerTask('build', ['jade']);
  
  grunt.registerTask('server', ['connect']);
	
  //Style Sheets Only
  grunt.registerTask('style', ['sass', 'cssmin', 'concat:stylesheets']);
  
  //Builds for Octoprint Plugin
  grunt.registerTask('octoprint', ['copy:octoprint', 'rename']);
  
  //Cleans out cache, resets styles sheets
  grunt.registerTask('reset', ['clean', 'copy', 'sass', 'concat', 'cssmin', 'uglify','jade']);
};