var gulp = require("gulp"),
    babel = require("gulp-babel"),
    watch = require("gulp-watch");

gulp.task("babeljs", function () {
    return gulp.src("coal/js/*.js")
        .pipe(babel())
        .pipe(gulp.dest("coal/dist/js"));
});
gulp.task("watch",function(){
    gulp.watch('coal/js/*.js',['babeljs']);
})

gulp.task('default',['watch','babeljs']);