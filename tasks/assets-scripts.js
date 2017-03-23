import gulp from 'gulp';
import browserSync from 'browser-sync';



gulp.task('assets-scripts', () => {
  gulp.src('app/js/vendor/*.js')
  	.pipe(gulp.dest('public/js/vendor/'))
    browserSync.reload();
});
