import gulp from 'gulp';
import browserSync from 'browser-sync';



gulp.task('assets', () => {
  gulp.src(['app/**', '!app/css{,/**}', '!app/img{,/**}', '!app/js{,/**}', '!app/fonts{,/**}'])
    .pipe(gulp.dest('dist'))
    browserSync.reload();
});
