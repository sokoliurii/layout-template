import gulp from 'gulp';
import browserSync from 'browser-sync';



gulp.task('fonts', () => {
	gulp.src('app/fonts/**/*.{ttf,woff,woff2,svg,eot,otf}')
		.pipe(gulp.dest('public/fonts'))
    browserSync.reload();
});