import gulp from 'gulp';
import clean from 'gulp-dest-clean';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';



gulp.task('img', () => {
  gulp.src(['app/img/**/*.{png,jpg,svg,gif,json,xml,ico}', '!app/img/sprite/**/*'])
    // .pipe(changed('app/img'))
    // .pipe(clean('public/img'))
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{
        cleanupIDs: false
      }]
    }))
    .pipe(gulp.dest('public/img'))
    browserSync.reload();
});
