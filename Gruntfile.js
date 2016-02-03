module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: ''
            },
            build: {
                src: 'src/main.js',
                dest: 'build/main.min.js'
            }
        },
        bookmarklet_wrapper: {
            options: {
                // Task-specific options go here.
                banner: '\n/*! <%= pkg.name %> by <%= pkg.author %> */'
            },
            main_target: {
                // Target-specific file lists and/or options go here.
                files: {
                    'build/bookmarklet-main.min.js': ['build/main.min.js']
                }
            },
        },
    });

    // Load the plugin that provides the "uglify" and "concat" tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bookmarklet-wrapper');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'bookmarklet_wrapper']);

};
