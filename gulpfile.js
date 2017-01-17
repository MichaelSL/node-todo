const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean-libs', function(){
    return gulp.src('public/jslibs', {read: false})
            .pipe(clean());
});

gulp.task('copy-frontend-libs', ['clean-libs'], function(){
    return gulp.src(['node_modules/requirejs/require.js', 'node_modules/systemjs/dist/system.js'])
        .pipe(gulp.dest('public/jslibs'));
});

gulp.task('copy-angular2', ['clean-libs'], function(){
    return gulp.src(['node_modules/@angular/**/*'])
        .pipe(gulp.dest('public/jslibs/@angular'));
});

gulp.task('copy-rxjs', ['clean-libs'], function(){
    return gulp.src(['node_modules/rxjs/**/*'])
        .pipe(gulp.dest('public/jslibs/rxjs'));
});

gulp.task('copy-reflect-metadata', ['clean-libs'], function(){
    return gulp.src(['node_modules/reflect-metadata/**/*'])
        .pipe(gulp.dest('public/jslibs/reflect-metadata'));
});

gulp.task('copy-zone', ['clean-libs'], function(){
    return gulp.src(['node_modules/zone.js/**/*'])
        .pipe(gulp.dest('public/jslibs/zone.js'));
});

gulp.task('copy-es6-shim', ['clean-libs'], function(){
    return gulp.src(['node_modules/es6-shim/**/*'])
        .pipe(gulp.dest('public/jslibs/es6-shim'));
});

gulp.task('default', ['copy-frontend-libs', 'copy-angular2', 'copy-rxjs', 'copy-reflect-metadata', 'copy-zone', 'copy-es6-shim']);