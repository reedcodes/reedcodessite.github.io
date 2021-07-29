'use strict';

const gulp   = require( 'gulp' ),
      sass   = require( 'gulp-dart-sass' );

// Define CSS source and distribution directories.
const cssSrc  = './src/_sass/**/*.scss';
const cssDist = './docs/dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( cssDist ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
