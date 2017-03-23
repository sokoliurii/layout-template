import gulp from 'gulp';
import watch from 'gulp-watch';



gulp.task('watch', () => {
  watch('app/*.{html,php}', () => {
    gulp.start('assets');
  })
  watch(['app/sass/**/*.scss'], () => {
    gulp.start('sass');
  })
  watch('app/js/**/*.js', () => {
    gulp.start('js')
  })
  watch(['app/img/**/*.png', 'app/img/**/*.jpg', 'app/img/**/*.gif', 'app/img/**/*.svg', 'app/img/**/*.json', 'app/img/**/*.xml', '!app/img/sprite/*.png', '!app/img/build-favicon/**/*'], () => {
    gulp.start('img')
  })
  watch('app/img/sprite/*.png', () => {
    gulp.start('sprite')
  })
});