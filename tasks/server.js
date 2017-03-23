import gulp from 'gulp';
import browserSync from 'browser-sync';



gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: ['./', 'public']
    }
  });
});
