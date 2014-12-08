module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: "src/**/*.*",
      tasks: ['browserify','copy']
    },
    browserSync: {
      bsFiles: {
        src : './build/*.*'
      },
      options: {
        server: {
          baseDir: "./build/",
          index: "index.html"
        },
        watchTask: true
      }
    },
    browserify: {
      options: {
        debug: true,
        extensions: ['.jsx'],
        external: ['react']
      },
      hello: {
        src: 'src/jsx/app.jsx',
        dest: 'build/js/app.js'
      }
    },
    copy: {
      all: {
        expand: true,
        cwd: 'src/',
        src: ['index.html'],
        dest: 'build/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserSync',"watch"]);
};
