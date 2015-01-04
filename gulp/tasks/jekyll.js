var gulp        = require('gulp');
var cp          = require('child_process');
var browserSync = require('browser-sync');
var config      = require('../config').jekyll;
var buildJekyll;

buildJekyll = function (cp, config, callback) {
    return cp.spawn(
        'bundle',
        [
            'exec', 'jekyll', 'build',
            '-q',
            '--source='         + config.src,
            '--destination='    + config.destination,
            '--config='         + config.config
        ],
        {
            stdio: 'inherit'
        }
    ).on('close', callback);
};

gulp.task('jekyll', function(done) {
    return buildJekyll(cp, config.development, done);
});

gulp.task('jekyll:production', function(done) {
    return buildJekyll(cp, config.production, done);
});

gulp.task('jekyll:sync', ['jekyll'], function() {
    browserSync.reload();
});