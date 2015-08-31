module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'assets/js/main.js']
    },

    uglify: {
      all: {
        files: {
          'public/js/main.min.js': ['assets/js/mousetrap.js','assets/js/main.js']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/css/style.css': 'assets/sass/style.sass'
        }
      }
    },

    watch: {
      sass: {
	files: ['**/*.sass'],
	tasks: ['sass']
      },
      js: {
	files: ['assets/**/*.js'],
	tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass','jshint','uglify','watch']);
};
