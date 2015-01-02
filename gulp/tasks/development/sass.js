var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var sourceMaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
    var sassConfig = config.sass.options;

    // Don’t write sourcemaps of sourcemaps
    var filter = gulpFilter(['*.css', '!*.map']);

    return gulp.src(config.sass.src)
        .pipe(plumber())
        .pipe(sass(sassConfig))
        .pipe(sourceMaps.init())
        .pipe(filter)
        .pipe(sourceMaps.write('.', { includeContent: false }))
        .pipe(filter.restore()) // Restore original files
        .pipe(gulp.dest(config.sass.dest));
});
