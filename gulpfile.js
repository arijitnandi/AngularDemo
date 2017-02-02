var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

gulp.task('compile-ts', function () {
  var sourceFiles = [
    config.allTs
  ];

  var tsResult = gulp.src(sourceFiles)
    .pipe(tsProject());

  return tsResult.js.pipe(gulp.dest(config.toOutputDestination))
});
