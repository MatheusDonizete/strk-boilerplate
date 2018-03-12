module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['src/scss/**/*.scss'],
                tasks: ['postcss'],
                options: {
                    spawn: false,
                },
            },
        },
        browserSync: {
            bsFiles: {
                src: [
                    'src/scss/**/*.css',
                    '**/*.html'
                ]
            },
            options: {
                server: {
                    baseDir: "./public"
                },
                watchTask: true
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('precss')(),
                    require('autoprefixer')({ browsers: 'last 2 versions' }),
                    require('cssnano'),
                    require('lost')()
                ]
            },
            dist: {
                files: [{
                    src: 'src/scss/*.scss',
                    dest: 'public/assets/css/style.css'
                }, {
                    src: 'src/scss/login/*.scss',
                    dest: 'public/assets/css/style.login.css' 
                }]
            }
        }
    })

    //Load for Grunt Plugins
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Registering Taskss    
    grunt.registerTask('build', ['postcss']);
    grunt.registerTask('default', ['postcss', 'browserSync', 'watch']);
};