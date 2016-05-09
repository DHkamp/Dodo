var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('watch:css', function() {
  gulp.watch(['./assets/scss/**/*.scss'], ['build:css']);
});

gulp.task('build:css', function() {
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('publish:css', function() {
  gulp.src([
    './assets/scss/**/*.scss',
    './assets/lib/prism/themes/prism-dark.css'])
    .pipe(sass())
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('publish:js', function() {
  gulp.src([
    './assets/js/index.js',
    './assets/lib/prism/prism.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/js'))
});