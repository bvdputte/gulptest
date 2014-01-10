var gulp = require('gulp');
var sass = require('gulp-ruby-sass')

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({
          style: 'nested',
          debugInfo: false,
          lineNumbers: true,
          loadPath: 'scss',
          bundleExec: true
        }))
        .pipe(gulp.dest('css'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('sass');

  // Watch files and run tasks if they change
  gulp.watch('./scss/**/*.scss', function(event) {
    gulp.run('sass');
  });
});