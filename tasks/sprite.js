import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';



gulp.task('sprite', () => {
  var spriteData = gulp.src('app/img/sprite/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      padding: 10,
      imgPath: '../img/sprite.png'

    }));
  spriteData.css.pipe(gulp.dest('app/sass/base/mixin'))
  spriteData.img.pipe(gulp.dest('app/img'))
});