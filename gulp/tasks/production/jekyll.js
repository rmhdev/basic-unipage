var gulp        = require('gulp');
var cp          = require('child_process');
var config      = require('../../config').jekyll.production;

gulp.task('jekyll:production', function(done) {
    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.destination, '--config=' + config.config], { stdio: 'inherit' })
        .on('close', done);
});
