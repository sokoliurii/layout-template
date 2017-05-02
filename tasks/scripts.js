import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpIf from 'gulp-if';
import errorHandler from './error';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

console.log(isDevelopment);

gulp.task('js', () => {
  browserify({
    entries: 'app/js/script.js',
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
  .pipe(gulpIf(isDevelopment, sourcemaps.init()))
  .pipe(gulpIf(!isDevelopment, uglify()))
  .pipe(gulpIf(isDevelopment, sourcemaps.write('map')))
  .pipe(gulp.dest('public/js'));
  browserSync.reload();
});
