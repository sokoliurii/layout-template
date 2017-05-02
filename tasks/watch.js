import gulp from 'gulp';
import watch from 'gulp-watch';



gulp.task('watch', () => {
  watch(['app/**', '!app/sass{,/**}', '!app/img{,/**}', '!app/js{,/**}', '!app/fonts{,/**}'], () => {
    gulp.start('assets');
  })
  watch(['app/sass/**/*.scss'], () => {
    gulp.start('sass');
  })
  watch('app/js/**/*.js', () => {
    gulp.start('js')
  })
  watch(['app/img/**/*.{png,jpg,svg,gif,json,xml,ico}', '!app/img/sprite/**/*'], () => {
    gulp.start('img')
  })
  watch('app/img/sprite/*.png', () => {
    gulp.start('sprite')
  })
});
