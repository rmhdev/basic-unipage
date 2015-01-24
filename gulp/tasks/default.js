var gulp = require('gulp');
var config = require('../config').watch;
var runSequence = require('run-sequence');

gulp.task('default', ['browser-sync'], function() {
    gulp.watch(config.sass, function () {
        runSequence('sass', 'optimize:development');
    });
    gulp.watch(config.javascript, ['javascript']);
    gulp.watch(config.images, ['images']);
    gulp.watch(config.jekyll, ['jekyll:sync']);
});
