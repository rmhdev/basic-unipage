var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../../config').revision;

gulp.task('revision', function() {
    return gulp.src(config.src.assets, { base: config.src.base })
        .pipe(gulp.dest(config.dest.assets))
        .pipe(rev())
        .pipe(gulp.dest(config.dest.assets))
        .pipe(rev.manifest({ path: config.dest.manifest.name }))
        .pipe(gulp.dest(config.dest.manifest.path));
});


var collect = require('gulp-rev-collector');
var configCollect  = require('../../config').collect;

gulp.task('revision:collect', function() {
    return gulp.src(configCollect.src)
        .pipe(collect())
        .pipe(gulp.dest(configCollect.dest));
});
