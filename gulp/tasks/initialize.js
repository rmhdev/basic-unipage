var gulp = require('gulp');
var del = require('del');
var config = require('../config').initialize;

gulp.task('initialize', function(callback) {
    del(config.src, callback);
});
