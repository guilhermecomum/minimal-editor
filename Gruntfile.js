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

    compass: {
      dev: {
	options: {
	  sassDir: 'assets/sass',
	  cssDir: 'public/css',
          environment: 'development'
	}
      },
      prod: {
        options: {
	  sassDir: 'assets/sass',
	  cssDir: 'public/css',
          environment: 'production'
	}
      }
    },

    watch: {
      compass: {
	files: ['**/*.sass'],
	tasks: ['compass:dev']
      },
      js: {
	files: ['assets/**/*.js'],
	tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['compass:dev','jshint','uglify','watch']);
  grunt.registerTask('prod', ['compass:prod']);
};
