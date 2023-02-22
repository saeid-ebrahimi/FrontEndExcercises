"use strict";
module.exports = function(grunt){
    require("time-grunt")(grunt);

    require("jit-grunt")(grunt, {
        useminPrepare: "grunt-usemin"
    });

    grunt.initConfig({
        saas: {
            dist: {
                files: {
                    "css/styles.css": 'css/styles.scss'
                }
            }
        },
        watch: {
            files: "css/*.scss",
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles:{
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        copy:{
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["*.html"],
                    dest: "dist"
                }]
            },
            fonts: {
                files: [{
                    // for font-awesome
                    expand: true,
                    dot: true,
                    cwd: "node_modules/font-awesome",
                    src: ['fonts/*.*'],
                    dest: 'dist/'
                }]
            }
            
        },
        clean: {
            build: {
                src:["dist/"]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ['img/*.{png,jpg,gif}'],
                    dest: "dist/"
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: "dist",
                src: ["contactus.html", "aboutus.html", "index.html"]
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify'],
                    },
                    post: {
                        css: [{
                            name: "cssmin",
                            createConfig: function(context, block){
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                seperator: ";"
            },
            // dist configuration is provided by useminPrepare
            dist: {},
        }, 
        uglify: {
            // dist configuration is provided by useminPrepare
            dist: {},
        },
        cssmin: {
            dist: {}
        },
        filerev:{
            options: {
                encoding: "utf8",
                algorithm: "md5",
                length: 20
            },
            release:{
                // filerev:release hashes(md5) all assets (images, js and css )
                // in dist directory
                files: [{
                    src: [
                        'dist/js/*.js',
                        "dist/css/*.css",
                    ]
                }]
            }
        },
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ["dist/contactus.html", "dist/aboutus.html", "dist/index.html"],
            options: {
                assetsDirs: ["dist", "dist/css", "dist/js"]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    "dist/index.html": "dist/index.html",
                    "dist/contactus.html": "dist/contactus.html",
                    "dist/aboutus.html": "dist/aboutus.html"
                }
            }
        }
    });
    grunt.registerTask("css", ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']) // watch must be last one task
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        "useminPrepare",
        "concat", 
        "cssmin",
        "uglify",
        "filerev",
        "usemin",
        "htmlmin"
    ])
}