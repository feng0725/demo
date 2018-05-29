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

var FILE_PATH = 'test1'


// bable 编译
gulp.task("babeljs", function () {
	var combined = combiner.obj([
		gulp.src(`${FILE_PATH}/compile/js/*.js`),
		babel(),
		gulp.dest(`${FILE_PATH}/js`),
		browserSync.reload({stream: true})])

	combined.on('error', console.error.bind(console))
	return combined
});

// stylus 编译
gulp.task('stylus', function () {
	var combined = combiner.obj([
		gulp.src(`${FILE_PATH}/compile/css/*.styl`),
		stylus(),
		autoprefixer(),
		gulp.dest(`${FILE_PATH}/css`),
		browserSync.reload({stream: true})])

	combined.on('error', console.error.bind(console))
	return combined
});

// 监听
gulp.task("watch", function () {
	gulp.watch(`${FILE_PATH}/compile/js/*.js`, ['babeljs']);
	gulp.watch(`${FILE_PATH}/compile/css/*.styl`, ['stylus']);
	gulp.watch(`${FILE_PATH}/**/*.html`, browserSync.reload);
})



// 自动更新浏览器任务
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: `${FILE_PATH}`
		}
	})
});
gulp.task('compile', ['watch', 'babeljs', 'stylus']);
gulp.task('default', ['watch', 'babeljs', 'stylus','browserSync']);