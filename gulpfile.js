const gulp = require("gulp");
const del = require("del");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const squoosh = require("gulp-libsquoosh");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");
const sync = require("browser-sync").create();

// Clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Copy images

const copyImages = () => {
  return gulp.src([
    "source/img/**/*.{png,jpg,jpeg,svg}",
    "!source/img/sprite/*.svg",
  ])
    .pipe(gulp.dest("build/img"))
}

exports.copyImages = copyImages;

// Optimize images

const optimizeImages = () => {
  return gulp.src([
    "source/img/**/*.{png,jpg,svg}",
    "!source/img/sprite/*.svg",
  ])
    .pipe(squoosh())
    .pipe(gulp.dest("build/img"))
}

exports.optimizeImages = optimizeImages;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;


// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;


// Scripts

const scripts = () => {
  return gulp.src("source/js/main.js")
    .pipe(terser())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;


//Sprite

const sprite = () => {
  return gulp.src("source/img/icons/sprite/*.svg")
    .pipe(squoosh())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"));
}

exports.sprite = sprite;


// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,jpeg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done();
}

exports.reload = reload;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/main.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
}


// Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
);

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
