var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	clean_css = require('gulp-clean-css'),
	auto_prefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concat_vendor = require('gulp-concat-vendor'),
	handlebars = require('gulp-handlebars'),
	wrap = require('gulp-wrap'),
	declare = require('gulp-declare'),
	order = require('gulp-order');

	const files_vendor = [
	'vendor/jquery/jquery.js',
	'vendor/jquery.event.gevent-master/jquery.event.gevent.js',
	'vendor/jquery.event.ue-master/jquery.event.ue.js',
	'vendor/taffydb-master/taffy.js',
	'vendor/visionmedia-page/page.js',
	'vendor/handlebars-runtime-3/handlebars.js'
];

gulp.task('build', ['html', 'sass', 'css', 'vendor', 'js', 'resource', 'templates']);

gulp.task('default', ['build', 'watch']);

gulp.task('vendor', function() {
	gulp.src(files_vendor)
		.pipe(order([
			'vendor/**/*.js'
		], { base: './' }))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('connect', function() {
	connect.server({
		livereload: true,
		root: 'dist'
	});
});

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
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('html', ['resource'], function() {
	return gulp.src(['index.html']) 
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

gulp.task('resource', function(){
	return gulp.src('./resources/**/*')
		.pipe(gulp.dest('./dist/resources'))
		.pipe(livereload());
});

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('./js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload());
});

gulp.task('watch', ['connect'], function() {
	livereload: true;
	livereload.listen();
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('index.html', ['html']);
	gulp.watch('css/**/*.css', ['css']);
	gulp.watch('js/**/*.js', ['js']);
	gulp.watch('resources/**/*', ['resource']);
	gulp.watch('features/**/*.hbs', ['templates']);
});

gulp.task('css', function() {
	return gulp.src('./css/**/*.css')
		.pipe(clean_css({compatibility: 'ie9'}))
		.pipe(auto_prefixer('last 2 version', 'safari 5', 'ie9'))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});