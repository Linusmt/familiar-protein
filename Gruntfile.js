module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'client/src/**/*.js', 'server/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['default']
    },

    clean: {
      build: {
        src: ['client/send/**/*.js']
      },
    },

    uglify: {
      build: {
        files: {
          'client/send/app.js': ['client/build/**/*.js']
        }
      }
    },

    copy: {
      build: {
        cwd: 'client/build',
        src: ['**'],
        dest: 'client/send',
        expand: true
      },
    },


    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'say "Successfully completed grunt tasks, now watching for changes"'
      }
    },

    "jsbeautifier": {
      files: ["client/**/*.js", "server/**/*.js", "!client/build/**/*.js", "!client/send/**/*.js", "!client/lib/**/*.js", "Gruntfile.js"],
      options: {
        html: {
          braceStyle: "collapse",
          indentChar: " ",
          indentScripts: "keep",
          indentSize: 4,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          unformatted: ["a", "sub", "sup", "b", "i", "u"],
          wrapLineLength: 0
        },
        css: {
          indentChar: " ",
          indentSize: 4
        },
        js: {
          braceStyle: "collapse",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('deploy', ['jshint', 'jsbeautifier', 'clean', 'uglify', 'shell', 'watch']);
  grunt.registerTask('build', ['jshint', 'jsbeautifier', 'clean', 'copy', 'watch']);
  grunt.registerTask('default', ['build']);

};
