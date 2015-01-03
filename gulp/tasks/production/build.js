var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
    runSequence(
        'initialize',
        [
            'jekyll:production',
            'sass',
            'javascript',
            'images'
        ],
        [
            'optimize:css',
            'optimize:js',
            'optimize:images'
        ],
        'revision',
        'revision:collect',
        callback
    );
});
