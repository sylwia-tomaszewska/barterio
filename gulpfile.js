const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("scss/**/*.scss", style);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("kategorie/**/*.html").on("change", browserSync.reload);
  gulp.watch("js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
