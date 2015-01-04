var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var concat      = require('gulp-concat');
var imageMin    = require('gulp-imagemin');
var size        = require('gulp-size');
var config      = require('../config').optimize;
var header      = require('gulp-header');
var pkg         = require('../../package.json');
var banner      = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');


gulp.task('optimize:css', function() {
    return gulp.src(config.css.source)
        .pipe(minifyCss(config.css.options))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest(config.css.destination))
        .pipe(size())
    ;
});


gulp.task('optimize:js', function() {
    return gulp.src(config.js.source)
        .pipe(concat(config.js.options.name))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest(config.js.destination));
});


gulp.task('optimize:images', function() {
    return gulp.src(config.images.source)
        .pipe(imageMin(config.images.options))
        .pipe(gulp.dest(config.images.destination))
        .pipe(size());
});


gulp.task('optimize:development', function() {
    return gulp.src([config.development.source])
        .pipe(gulp.dest(config.development.destination))
        .pipe(size())
        ;
});
