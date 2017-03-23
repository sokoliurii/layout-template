import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import errorHandler from './error';



gulp.task('js', () => {
  browserify({
    entries: ['app/js/plugins.js', 'app/js/script.js'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015"]})
  .bundle()
  .on('error', function(err) {
      errorHandler(err);
      this.emit('end');
    })
  .pipe(source('script.js'))
  .pipe(buffer())
  // .pipe(sourcemaps.init())
  // .pipe($.uglify())
  // .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest('public/js'));
  browserSync.reload();
});
