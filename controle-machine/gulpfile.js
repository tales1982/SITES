const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require ('gulp-imagemin');

function compresionJavacript(){
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
.pipe(gulp.dest('./build/script'))
}

function compresionImage(){
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilaSass(){
    return gulp.src('./src/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'))
}


exports.default = function(){
    gulp.watch('./src/style/*.scss',{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./src/script/*.js',{ignoreInitial:false}, gulp.series(compresionJavacript));
    gulp.watch('./src/images/*',{ignoreInitial:false}, gulp.series(compresionImage));
}

exports.sass = compilaSass;
exports.javaScript = compresionJavacript;
exports.images = compresionImage;