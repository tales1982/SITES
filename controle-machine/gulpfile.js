const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function copyBootstrap() {
  return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./build/style')); // Altere o destino conforme necessário
}

function compresionJavascript() {
  return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'));
}

function compresionImage() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
  return gulp.src('./src/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'));
}

exports.default = function () {
  gulp.watch('./src/style/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
  gulp.watch('./src/script/*.js', { ignoreInitial: false }, gulp.series(compresionJavascript));
  gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(compresionImage));
}

exports.sass = compilaSass;
exports.javascript = compresionJavascript;
exports.images = compresionImage;
exports.bootstrap = copyBootstrap;
