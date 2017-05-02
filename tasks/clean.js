import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', () => {
  gulp.src('public')
  .pipe(clean())
});
