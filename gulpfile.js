const gulp = require('gulp'),
	html2js = require('gulp-html2js'),
	concat = require('gulp-concat'),
	auto_prefixer = require('gulp-autoprefixer'),
	clean_css = require('gulp-clean-css'),
	gap = require('gulp-append-prepend'),
	_ = require('lodash'),
	declare = require('gulp-declare'),
	handlebars = require('gulp-handlebars'),
	wrap = require('gulp-wrap'),
	order = require('gulp-order'),
	rename = require("gulp-rename"),
	uglify = require('gulp-uglifyjs'),
	babel = require('gulp-babel'),
	jshint = require('gulp-jshint'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass');


const localNodePath = 'path_to_public_folder_backproject/public/';

const files_css = ['css/*.css', 'features/**/*.css'];

const files_vendor = [
	'vendor/jquery.event.gevent-master/jquery.event.gevent.js',
	'vendor/jquery.event.ue-master/jquery.event.ue.js',
	'vendor/taffydb-master/taffy.js',
	'vendor/visionmedia-page/page.js',
	'vendor/handlebars-runtime-3/handlebars.js'
];

const files_js = [
	'js/**/*.js',
	'js/*.js',
	'features/**/*.js'
];

const files_js_order = [
	'js/spa.js',
	'js/spa.util.js',
	'js/spa.util_b.js',
	'js/spa.router.js',
	'js/spa.shell.js',
	'js/spa.template.js',
	'features/**/*.js'
];

gulp.task('default', ['build', 'watch']);

gulp.task('connect', function() {
	connect.server({
		livereload: true,
		root: 'dist'
	});
});

gulp.task('html', function () {
   gulp.src(['index.html'])
	   .pipe(rename(function (path) {
		   path.dirname += "/";
		   path.basename = 'index';
		   path.extname = ".html";
	   }))
	   .pipe(gulp.dest('dist/'))
	   .pipe(livereload());
});

gulp.task('images', function () {
	gulp.src(['images/*', 'images/**/*'])
		.pipe(gulp.dest('dist/images'))
		.pipe(livereload());
		//.pipe(gulp.dest(localNodePath + 'images'));
});

// gulp.task('fa_fonts', function () {
//     gulp.src(['vendor/font-awesome/font-awesome/fonts/*'])
//         .pipe(gulp.dest('dist/fonts');
//         .pipe(gulp.dest(localNodePath + 'fonts'));
// });


gulp.task('templates', function(){
	gulp.src(['features/**/*.hbs'])
	// Compile each Handlebars template source file to a template function
		.pipe(handlebars())
		// Wrap each template function in a call to Handlebars.template
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		// Declare template functions as properties and sub-properties of MyApp.templates
		.pipe(declare({
			namespace: 'spa_templates.templates',
			noRedeclare: true, // Avoid duplicate declarations
			processName: function(filePath) {
				// Allow nesting based on path using gulp-declare's processNameByPath()
				// You can remove this option completely if you aren't using nested folders
				// Drop the client/templates/ folder from the namespace path by removing it from the filePath
				return declare.processNameByPath(filePath.replace('client/templates/', ''));
			}
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(gulp.dest(localNodePath + 'js/'))
		.pipe(livereload());
});

gulp.task('vendor', function(){
	return gulp.src(files_vendor)
		.pipe(order([
			'vendor/**/*.js'
		], { base: './' }))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(livereload());
		//.pipe(gulp.dest(localNodePath + 'js'));
});

gulp.task('js', function () {
	return gulp.src(files_js)
		.pipe(order(files_js_order, { base: './' }))
		.pipe(concat('app.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(livereload());
		//.pipe(gulp.dest(localNodePath + 'js'));
});

gulp.task('watch', ['connect'], function () {
	livereload: true;
	livereload.listen();
	gulp.watch(['features/**/*.hbs'], ['templates', 'js']);
	gulp.watch(['index.html'], ['html']);
	gulp.watch(['images/*', 'images/**/*'], ['images']);
	gulp.watch(['css/*.css', 'features/**/*.css'], ['css']);
	gulp.watch(['js/*.js', 'features/**/*.js'], ['templates','js']);
	gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('css', function() {
	return gulp.src('./css/**/*.css')
		.pipe(clean_css({compatibility: 'ie9'}))
		.pipe(auto_prefixer('last 2 version', 'safari 5', 'ie9'))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});

gulp.task('build_js', function () {
	return gulp.src(files_js)
		.pipe(order(files_js_order, { base: './' }))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('app.js'))
		//.pipe(uglify({ compress: true }))
		.pipe(gulp.dest('dist/js'));
		//.pipe(gulp.dest(localNodePath + 'js'));
});

gulp.task('build', ['html', 'images','templates', 'vendor', 'js', 'sass', 'css'], function(){
	console.log('Build done');
});

gulp.task('jshint', function () {
	return gulp.src(['features/**/*.js', 'js/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});