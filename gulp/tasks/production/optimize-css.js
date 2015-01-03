var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var size = require('gulp-size');
var config = require('../../config').optimize.css;

gulp.task('optimize:css', function() {
    return gulp.src(config.source)
        .pipe(minifyCss(config.options))
        .pipe(gulp.dest(config.destination))
        .pipe(size())
    ;
});
