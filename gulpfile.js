var gulp = require('gulp');

gulp.task('copy-frontend-libs', function(){
    return gulp.src(['node_modules/requirejs/require.js', 'node_modules/systemjs/dist/system.js'])
        .pipe(gulp.dest('public/jslibs'));
});

gulp.task('default', ['copy-frontend-libs']);