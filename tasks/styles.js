import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import browserSync from 'browser-sync';
import errorHandler from './error';
import csso from 'gulp-csso';
import gulpIf from 'gulp-if';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('sass', () => {
  gulp.src('app/sass/style.scss')
    .pipe(plumber({errorHandler}))
    .pipe(sassGlob())
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.write('map')))
    .pipe(gulpIf(!isDevelopment, csso({
      restructure: false,
      sourceMap: false
    })))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});
