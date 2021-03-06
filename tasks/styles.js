import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import csso from 'gulp-csso';
import gulpIf from 'gulp-if';



const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// const spriteOpts = {
//   spritePath: 'dist/img/sprite/',
//   filterBy: image => {
//     // Check if image is in sprite folder
//     if (!/sprite/.test(image.url)) {
//       return Promise.reject();
//     }
//     return Promise.resolve();
//   }
// }



gulp.task('styles', () => {
  gulp.src('app/css/style.css')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(postcss([
      require('postcss-sassy-import')(),
      // require('stylelint')(),
      // require('postcss-sprites')(spriteOpts),
      require('postcss-nesting'),
      require('postcss-svg')({nonFragments: true}),
      require('postcss-custom-media')(),
      require('postcss-custom-properties')(),
      require('postcss-hexrgba'),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ]))
    .pipe(gulpIf(isDevelopment, sourcemaps.write('map')))
    .pipe(gulpIf(!isDevelopment, csso({
      restructure: false,
      sourceMap: false
    })))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});