var gulp = require('gulp');
var browserSync = require('browser-sync');

// Save a reference to the `reload` method
var reload = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync({
        server: "./app"
    });

    gulp.watch("app/assets/css/*.css").on('change', reload);
    gulp.watch("app/*.html").on('change', reload);
});


gulp.task('default', ['serve']);