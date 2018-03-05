var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	clean_css = require('gulp-clean-css'),
	auto_prefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concat_vendor = require('gulp-concat-vendor');

gulp.task('build', ['html', 'css']);

gulp.task('default', ['watch', 'vendor']);

gulp.task('vendor', function() {
	gulp.src(['./vendor/**/*.js'])
		.pipe(concat_vendor('vendor.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('connect', function() {
	connect.server({
		livereload: true,
		root: 'dist'
	});
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
		.pipe(gulp.dest('./dist'))
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
});

gulp.task('css', function() {
	return gulp.src('./css/**/*.css')
		.pipe(clean_css({compatibility: 'ie9'}))
		.pipe(auto_prefixer('last 2 version', 'safari 5', 'ie9'))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});