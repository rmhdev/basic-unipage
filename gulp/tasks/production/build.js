var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
    runSequence(
        'delete',
        'jekyll', //TODO: don't use development task
        'sass',
        'optimize:css',
        callback
    );
});
