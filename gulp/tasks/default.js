var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('default', ['browser-sync'], function() {
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.javascript, ['javascript']);
    gulp.watch(config.images, ['images']);
    gulp.watch(config.jekyll, ['jekyll:sync']);
});
