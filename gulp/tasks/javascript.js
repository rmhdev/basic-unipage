var gulp         = require('gulp');
var config       = require('../config').javascript;

gulp.task('javascript', function() {
    return gulp.src(config.src, {})
        .pipe(gulp.dest(config.dest));
});
