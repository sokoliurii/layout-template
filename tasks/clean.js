import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', () => {
  gulp.src('dist')
  .pipe(clean())
});
