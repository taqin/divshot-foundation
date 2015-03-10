var gulp = require('gulp');
var browserSync = require('browser-sync');


// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync({
        server: "./app"
    });

    gulp.watch("app/css/*.css").on('change', reload);
    gulp.watch("app/*.html").on('change', reload);
});


gulp.task('default', ['serve']);