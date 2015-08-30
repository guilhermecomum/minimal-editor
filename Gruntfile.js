module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    min: {
      dist: {
	src: ['assets/js/main.js'],
	dest: 'public/js/all.min.js'
      }
    },
    jshint: {
      all: ['assets/**/*.js']
    },
    compass: {
      dist: {
	options: {
	  sassDir: 'assets/sass',
	  cssDir: 'public/css'
	}
      }
    },
    watch: {
      css: {
	files: '**/*.sass',
	tasks: ['compass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
};
