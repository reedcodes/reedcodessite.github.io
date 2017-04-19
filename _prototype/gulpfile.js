var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var js = [
    'js/vendor/jquery.min.js',
    'js/custom/*.js'
];

gulp.task('default',function() {
    return gulp.src(js)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});