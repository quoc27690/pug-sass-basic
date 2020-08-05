/** Declare module */

const { src, dest, parallel, watch, series } = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync").create();

/** Files Path */
const FilesPath = {
  sassFiles: "sass/*.sass",
  jsFiles: "js/*.js",
  htmlFiles: "pug/pages/*.pug",
};

const { sassFiles, jsFiles, htmlFiles } = FilesPath;

/** Sass Task */
function sassTask() {
  return src(sassFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("styles.css"))
    .pipe(dest("assets/css"))
    .pipe(browserSync.stream());
}

/** HTML Task */
function htmlTask() {
  return src(htmlFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest("public"))
    .pipe(browserSync.stream());
}

/** JS Task */
function jsTask() {
  return src(jsFiles).pipe(concat("scripts.js")).pipe(dest("assets/js"));
}

/** Watch Task */

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  watch(sassFiles, sassTask);
  watch(jsFiles, jsTask);
  watch(htmlFiles, htmlTask);
}

exports.js = jsTask;
exports.sass = sassTask;
exports.html = htmlTask;
exports.default = series(parallel(htmlTask, sassTask, jsTask));
exports.serve = series(serve, parallel(htmlTask, sassTask, jsTask));
