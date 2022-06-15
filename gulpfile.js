const { src, dest, watch, series } = require('gulp');

const sassCompile = require('gulp-sass')(require('sass'));
// sassCompile.compiler = require('node-sass');
const minify = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');

function compileSass() {
  return src('src/css/*.scss')
    .pipe(sassCompile())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/css/'));
}

function watchTask() {
  watch('src/css/*scss', compileSass);
}
// exports.watchTasks = watchTasks;
exports.default = series(compileSass, watchTask);
