const gulp = require('gulp'); // Inicializar o Gulp
const sass = require('gulp-sass')(require('sass')); // Compilador SASS
const uglify = require('gulp-uglify'); // Compilador JS

function compilerJS() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

// Tarefa para observar alterações nos arquivos .scss e .js
function watchFiles() {
  gulp.watch('./src/styles/*.scss', gulp.series(styles));
  gulp.watch('./src/scripts/*.js', gulp.series(compilerJS));
}

// Tarefa padrão que inicia a observação dos arquivos
exports.default = gulp.series(styles, compilerJS, watchFiles);