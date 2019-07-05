const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const browserSync = require('browser-sync');

gulp.task('styles:prod', () => {
  return gulp.src('./resources/styles/app.css')
    .pipe(postcss())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('styles:dev', () => {
  return gulp.src('./resources/styles/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts:prod', () => {
  return gulp.src('./resources/scripts/app.js')
    .pipe(rollup({
      plugins: [
        resolve(),
        babel()
      ],
      external: ['jquery']
    }, {
        format: 'iife',
        globals: {
          jquery: '$'
        }
      }
    ))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('scripts:dev', () => {
  return gulp.src('./resources/scripts/app.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({
      plugins: [
        resolve(),
        babel()
      ],
      external: ['jquery']
    }, {
        format: 'iife',
        globals: {
          jquery: '$'
        }
      }
    ))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', gulp.series('styles:dev', 'scripts:dev', () => {
  browserSync({
    proxy: {
      target: 'http://127.0.0.1:8000'
    },
    injectChanges: true,
    open: true,
    notify: false,
    logLevel: 'warn'
  });
}));

gulp.task('dev', gulp.parallel('serve', () => {
  gulp.watch('./resources/views/**/*.blade.php').on('change', (path) => {
    return gulp.src(path)
      .pipe(browserSync.reload({ stream: true }));
  });
  gulp.watch('./resources/styles/**/*.css', gulp.series('styles:dev'));
  gulp.watch('./resources/scripts/**/*.js', gulp.series('scripts:dev'));
}));

gulp.task('prod', gulp.series('styles:prod', 'scripts:prod'));

gulp.task('default', gulp.series('dev'));
