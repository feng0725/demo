var gulp = require("gulp"),
    babel = require("gulp-babel"),
    stylus = require('stylus'),
    watch = require("gulp-watch");

gulp.task("babeljs", function () {
    return gulp.src("coal/js/*.js")
        .pipe(babel())
        .on('error', function(err) {
            console.log('babel Error!', err.message);
            this.end();
        })
        .pipe(gulp.dest("coal/dist/js"));
});
gulp.task("watch",function(){
    gulp.watch('coal/js/*.js',['babeljs']);
})

// gulp.task('stylus', function () {
//     return gulp.src('coal/css/*.styl')
//         .pipe(stylus())
//         .pipe(gulp.dest('coal/dist/css'));
// });
// gulp.task('saswatch', function () {
//     gulp.watch('coal/css/*.styl', ['stylus']);
// });

gulp.task('default',['watch','babeljs']);