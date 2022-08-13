const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function buildStyles() {
    return src('beta/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(["beta/**/*.scss", "*.ejs"], buildStyles);
}

exports.default = series(buildStyles, watchTask);