"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

	grunt.initConfig({
        connect: {
            options: {
                port: 8888,
                hostname: "*",
                livereload: true
            },
            serve: {
                options: {
                    open: true,
                    base: [".", "bower_components"]
                }
            }
        },
        watch: {
            livereload: {
                 options: {
                     livereload: "<%= connect.options.livereload %>"
                 },
                 files: ["index.html", "js/**/*.js", "css/**/*.css"]               
            }
 
        }
    });

    grunt.registerTask("serve", ["connect:serve", "watch"]);
};
