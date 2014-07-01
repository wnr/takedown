"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

	grunt.initConfig({
        connect: {
            options: {
                port: 8000,
                hostname: "*",
                keepalive: true
            },
            serve: {
                
            }
        }
    });

    grunt.registerTask("serve", ["connect:serve"]);
}
