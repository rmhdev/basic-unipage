var gulp        = require('gulp');
var cp          = require('child_process');
var config      = require('../../config').jekyll.development;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.destination, '--config=' + config.config], { stdio: 'inherit' })
        .on('close', done);
});
