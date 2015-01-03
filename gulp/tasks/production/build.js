var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
    runSequence(
        'delete',
        'jekyll:production',
        [
            'sass',
            'javascript'
        ],
        [
            'optimize:css',
            'optimize:js'
        ],
        'revision',
        'revision:collect',
        callback
    );
});
