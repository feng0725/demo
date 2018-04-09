var gulp = require("gulp");
// babel
var babel = require("gulp-babel");
// stylus
var stylus = require('gulp-stylus');
//  添加浏览器后缀
var autoprefixer = require('gulp-autoprefixer')
var watch = require("gulp-watch");
// 自动同步浏览器插件
var browserSync = require('browser-sync');
// 整合 streams 来处理错误
var combiner = require('stream-combiner2');

// bable 编译
gulp.task("babeljs", function () {
	var combined = combiner.obj([
		gulp.src("coal/js/*.js"),
		babel(),
		gulp.dest("coal/dist/js"),
		browserSync.reload({stream: true})])

	combined.on('error', console.error.bind(console))
	return combined
});

// stylus 编译
gulp.task('stylus', function () {
	var combined = combiner.obj([
		gulp.src('coal/css/*.styl'),
		stylus(),
		autoprefixer(),
		gulp.dest('coal/dist/css'),
		browserSync.reload({stream: true})])

	combined.on('error', console.error.bind(console))
	return combined
});

// 监听
gulp.task("watch", function () {
	gulp.watch('coal/js/*.js', ['babeljs']);
	gulp.watch('coal/css/*.styl', ['stylus']);
	gulp.watch('coal/*.html', browserSync.reload);
})



// 自动更新浏览器任务
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'coal'
		}
	})
});
gulp.task('compile', ['watch', 'babeljs', 'stylus']);
gulp.task('default', ['watch', 'babeljs', 'stylus','browserSync']);