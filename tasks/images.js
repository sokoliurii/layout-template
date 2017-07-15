import gulp from 'gulp';
// import clean from 'gulp-dest-clean';
// import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';



gulp.task('img', () => {
  gulp.src(['app/img/**/*.{png,jpg,svg,gif,json,xml,ico}', '!app/img/sprite/**/*', '!app/img/sprite.svg'])
    // .pipe(changed('app/img'))
    // .pipe(clean('dist/img'))
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{
        cleanupIDs: false,
        removeComments: true,
        cleanupAttrs: true,
        cleanupEnableBackground: true,
        cleanupNumericValues: true,
        cleanupListOfValues: true,
        collapseGroups: true,
        minifyStyles: true,
        convertShapeToPath: true,
        convertStyleToAttrs: true,
        removeDoctype: true,
        removeDesc: true,
        removeEditorsNSData: true,
        removeEmptyAttrs: true,
        removeEmptyText: true,
        removeEmptyContainers: true,
        removeHiddenElems: true,
        removeMetadata: true,
        removeNonInheritableGroupAttrs: true,
        removeUnknownsAndDefaults: true,
        removeUselessDefs: true,
        removeUnusedNS: true,
        removeUselessStrokeAndFill: true,
        removeXMLProcInst: true
      }]
    }))
    .pipe(gulp.dest('dist/img'));
    browserSync.reload();
});
