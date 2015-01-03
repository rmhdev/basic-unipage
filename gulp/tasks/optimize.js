var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var size = require('gulp-size');
var configCss = require('../config').optimize.css;

gulp.task('optimize:css', function() {
    return gulp.src(configCss.source)
        .pipe(minifyCss(configCss.options))
        .pipe(gulp.dest(configCss.destination))
        .pipe(size())
    ;
});


var concat = require('gulp-concat');
var configJs = require('../config').optimize.js;

gulp.task('optimize:js', function() {
    return gulp.src(configJs.source)
        .pipe(concat(configJs.options.name))
        .pipe(gulp.dest(configJs.destination));
});


var imageMin = require('gulp-imagemin');
var configImage = require('../config').optimize.images;

gulp.task('optimize:images', function() {
    return gulp.src(configImage.source)
        .pipe(imageMin(configImage.options))
        .pipe(gulp.dest(configImage.destination))
        .pipe(size());
});
