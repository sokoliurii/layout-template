import gulp from 'gulp';
import watch from 'gulp-watch';



gulp.task('watch', () => {
  watch(['app/**', '!app/css/', '!app/img/', '!app/js/', '!app/fonts/'], () => {
    gulp.start('assets');
  })
  watch(['app/css/**/*.css'], () => {
    gulp.start('styles');
  })
  watch('app/js/**/*.js', () => {
    gulp.start('js')
  })
  watch(['app/img/**/*.{png,jpg,svg,gif,json,xml,ico}', '!app/img/sprite/**/*'], () => {
    gulp.start('img')
  })
});
