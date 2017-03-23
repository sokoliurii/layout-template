import gulp from 'gulp';
import browserSync from 'browser-sync';



gulp.task('assets', () => {
  gulp.src('app/*.{html,php}')
  	.pipe(gulp.dest('public'))
    browserSync.reload();
});