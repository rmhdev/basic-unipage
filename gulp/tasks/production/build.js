var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
    runSequence(
        'delete',
        'jekyll:production',
        'sass',
        'optimize:css',
        callback
    );
});
