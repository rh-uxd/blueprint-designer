var lrSnippet = require('connect-livereload')();
module.exports = function( grunt ) {
    'use strict';

    // Load grunt tasks automatically
    require( 'load-grunt-tasks' )( grunt );

    // Configuration
    var port = grunt.option('port') || 8090

    // Define the configuration for all the tasks
    grunt.initConfig( {
        // Project settings
        projectSettings: {
            // configurable paths
            src:      require( './bower.json' ).appPath || 'src',
            unitTest: 'test/unit',
            e2eTest:  'test/e2e',
            dist:     'dist',
            deploy:   'deploy',
            mockData: 'mock_data',
            pkg:      grunt.file.readJSON( 'package.json' )
        },

        less: {
            tmp: {
                files: {
                    'src/styles/app.css': 'src/styles/less/app.less'
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        // Live Reload is to slow need to figure out how to stop reloading of npm modules
        watch:    {
            js:         {
                files:   ['<%= projectSettings.src %>/**/*.js']
            },
            css:        {
                files:   ['<%= projectSettings.src %>/**/*.css']
            },
            less: {
                files: 'src/**/*.less',
                tasks: ['less']
            },
            html:       {
                files:   ['<%= projectSettings.src %>/**/*.html'],
                tasks: ['build'],
                options: {
                    livereload: 37800
                }
            },
            json:       {
                files:   ['<%= projectSettings.mockData %>/**/*.json',
                          '<%= projectSettings.src %>/**/*.json'
                ]
            },
            jsTest:     {
                files: ['<%= projectSettings.unitTest %>/{,*/}*-test.js'],
                tasks: ['jshint:test', 'karma']
            },
            gruntfile:  {
                files: ['Gruntfile.js']
            }
        },

        connect:  {
            server: {
                options:    {
                    port:       port,
                    hostname: '*',
                    livereload: 37800,
                    open:true,
                    base:       [
                        '.tmp',
                        '<%= projectSettings.src %>',
                        '<%= projectSettings.mockData %>'
                    ],
                    middleware: function (connect, options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [lrSnippet, require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files
                        options.base.forEach(function (base) {
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able
                        var directory = options.directory || options.base[options.base.length - 1];
                        middlewares.push(connect.directory(directory));
                        return middlewares;
                    }
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint:   {
            options: {
                jshintrc: '<%= projectSettings.e2eTest %>/.jshintrc'
            },
            src:     [
                'Gruntfile.js',
                '<%= projectSettings.src %>/modules/**/*.js'
            ],
            test:    [
                '<%= projectSettings.unitTest %>/**/*.js',
                '<%= projectSettings.e2eTest %>/**/*.js'
            ],
        },

        // Empties folders to start fresh
        clean:           {
            dist:   {
                files: [{
                            dot: true,
                            src: [
                                '.tmp',
                                '<%= projectSettings.dist %>/*'
                            ]
                        }]
            },
            deploy: {
                files: [{
                            dot: true,
                            src: [
                                '<%= projectSettings.deploy %>/*'
                            ]
                        }]
            },
            server: '.tmp'
        },

        // Automatically inject Bower components into the src
        /*'bower-install': {
            src: {
                html:       '<%= projectSettings.src %>/index.html',
                ignorePath: '<%= projectSettings.src %>/'
            }
        },*/

        // Renames files for browser caching purposes
        rev:             {
            dist: {
                files: {
                    src: [
                        '<%= projectSettings.dist %>/{,*/}*.js',
                        '<%= projectSettings.dist %>/{,*/}*.css',
                        '!<%= projectSettings.dist %>/i18n/*.js',
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare:   {
            html:    ['<%= projectSettings.src %>/index.html'],
            options: {
                dest: '<%= projectSettings.dist %>'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin:          {
            html:    ['<%= projectSettings.dist %>/{,*/}*.html'],
            css:     ['<%= projectSettings.dist %>/styles/{,*/}*.css',
                      '<%= projectSettings.dist %>/libraries/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= projectSettings.dist %>']
            }
        },
        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin:           {
            dist: {
                files: [{
                            expand: true,
                            cwd:    '.tmp/concat/modules',
                            src:    '*.js',
                            dest:   '.tmp/concat/modules'
                        }]
            }
        },

        // Template
        ngtemplates:     {
            options:               {
                htmlmin: {
                    collapseWhitespace:        true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA:   true,
                    removeOptionalTags:        true
                }
            },
            appModule:             {
                // this is the part we want to strip from the URL, though not the path
                cwd:  '<%= projectSettings.src %>',
                // this is the part we want actually in the URL (i.e. modules/foo/bar)
                src:  'modules/app/**/*.html',
                // this is where it goes
                dest: '<%= projectSettings.src %>/modules/templates/appModuleTemplates.js'
            }
        },


        // Copies remaining files to places other tasks can use
        copy: {
            html: {
                expand: true,
                cwd: 'src',
                src: ['*.html'],
                dest: 'dist'
            },
            fonts: {
                expand: true,
                cwd: 'src/libraries/patternfly/dist/',
                src: ['fonts/**'],
                dest: 'dist/styles/'
            },
            fontawesome: {
                expand: true,
                cwd: 'src/libraries/patternfly/components/font-awesome',
                src: ['fonts/**'],
                dest: 'dist/components/font-awesome/'
            },
            images: {
                expand: true,
                cwd: 'src/styles/',
                src: ['images/**'],
                dest: 'dist/styles/'
            },
            img: {
                expand: true,
                cwd: 'src/libraries/patternfly/dist/',
                src: ['img/**'],
                dest: 'dist/'
            },
            modules: {
                expand: true,
                cwd: 'src',
                src: ['modules/**/*.html'],
                dest: 'dist'
            },
            templates: {
                expand: true,
                cwd: 'src',
                src: ['modules/templates/appModuleTemplates.js'],
                dest: 'dist'
            },
        },

        // grunt-karma plugin settings
        karma:           {
            options: {
                client: {
                    captureConsole: false
                }
            },
            unit:    {
                configFile: 'karma-unit.conf.js',
                singleRun:  true
            }
        },

        // grunt-protractor-runner plugin settings
        protractor:      {
            options:    {
                configFile: 'protractor-e2e.conf.js',
                keepAlive:  false, // if true, grunt process continues when test fails
                noColor:    false,     // if true, protractor will not use colors in its output
                args:       {
                    // arguments passed to the command
                    // target-specific arguments
                    baseUrl: grunt.option( 'baseUrl' ) || 'http://localhost:3000/'
                }
            },
            all:        {
                options: {
                    args: {
                        // no suite specified (should run everything)
                    }
                }
            },
            sharded:    {
                options: {
                    args: {
                        capabilities: {
                            maxInstances:   3,
                            shardTestFiles: true
                        },
                        suite:        'cb' // run all cb tests
                    }
                }
            },
            /**
             * For running specific test subsets, define your suites in protractor-e2e.conf.js, then reference them here
             */
            // sample test suite runner. Make sure this matches a suite defined in your protractor-e2e.conf.js file
        },

        exec: {
            pseudoTranslate: {
                cmd: function() {
                    return 'node pseudoTranslate.js';
                }
            }
        }

    } );

    grunt.registerTask( 'jshintRun', [
        'jshint'
    ] );

    grunt.registerTask( 'serve', function( target ) {
        grunt.task.run( [
            'clean:server',
            'configureProxies:server', // added just before connect
            'connect',
            'watch'
        ] );
    } );



    grunt.registerTask( 'translate', function() {
        grunt.task.run( 'exec:pseudoTranslate' );
    } );

    grunt.registerTask( 'test', [
        'clean:server',
        'jshint:test',
        'karma'
    ] );

    grunt.registerTask( 'unittest', [
        'clean:server',
        'ngtemplates',
        'translate',
        'karma'
    ] );

    grunt.registerTask( 'e2etest', [
        'clean:server',
        'ngtemplates',
        'translate',
        'protractor:all'
    ] );

    grunt.registerTask( 'build', function( target ) {

        var buildTasks = [
            'clean:dist',
            'translate',
            'less',
            'ngtemplates',
            'useminPrepare',
            'concat',
            'ngmin',
            'copy',
            'cssmin',
            'uglify',
            'rev',
            'usemin'
        ];

        grunt.task.run( buildTasks );

    } );

    grunt.registerTask( 'default', [
        'test',
        'build'
    ] );

};