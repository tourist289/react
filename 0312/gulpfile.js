'use strict';

const gulp = require('gulp'); // подкл галп
var concatCss = require('gulp-concat-css'); // объединение стилей в 1фаил
var cleanCss = require('gulp-clean-css'); //минифицирует стили
var uncss = require('gulp-uncss'); // уббирает неиспользуемые стили
const autoprefixer = require('gulp-autoprefixer');
var lessCss = require('gulp-less');

var concat = require('gulp-concat'); // объединение скриптов в 1фаил
var uglyfly = require('gulp-uglyfly'); // сжатие, минификация
const babel = require('gulp-babel');


var server = require('gulp-server-livereload');

// const vfs = require("vinyl-fs");
// const path = require('path');
// const stylus = require("gulp-stylus");
// const resolver = require("stylus").resolver;
// const debug = require("gulp-debug");
// const sourcemaps = require("gulp-sourcemaps");
// const gulpIf = require("gulp-if"); 
// const del = require("del");
// const newer = require("gulp-newer");
// const remember = require("gulp-remember"); 
// const catched = require("gulp-catched");
// const browserSync = require('browser-sync').create();
// const notify = require('gulp-notify');
// const svgsprite = require('gulp-svg-sprite');
// const cssnano = require('gulp-cssnano');
// const rev = require('gulp-rev');
// const revreplace = require('gulp-rev-replace');


gulp.task('helloTask' , function(){
    console.log('hello woooo');
});

/*styles block*/
gulp.task('makeStyles', function () {  //concat + minifie styles
    // return gulp.src(['css/style.css', 'css/norm.css'])
    return gulp.src('css/style.css')

        // .pipe(concatCss("styles/main.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        // .pipe(cleanCss({compatibility: 'ie8'}))
        // .pipe(uncss({
        //     html: ['index.html', 'posts/**/*.html', 'http://example.com']
        // }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('lessStyles', function () {
    return gulp.src(['less/*.less'])
        .pipe(lessCss())
        .pipe(gulp.dest('dist/css/'));

});




/*styles block END*/

/*scripts block*/
gulp.task('makeScripts', function() {
    return gulp.src('js/*.js')
        .pipe(babel())
        .pipe(concat('all.js'))
        // .pipe(uglyfly())
        .pipe(gulp.dest('dist/js/'));
});

/*scripts block END*/
/*livereload*/

gulp.task('autoReloader', function() {
    gulp.src('')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            directoryListing: false,
            open: false
        }));
});



// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
//
// gulp.task('styles', function(){
// 	return gulp.src('frontend/styles/index.styl')
// 		.pipe(gulpIf(isDevelopment, sourcemaps.init())
// 		.pipe(stylus({
// 			define: {
// 				url: resolver()
// 			}
// 		}))
// 		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
// 		.pipe(gulpIf(isDevelopment, cssnano()))
// 		.pipe(gulpIf(isDevelopment, rev()))
// 		.pipe(gulp.dest('public/styles'));
// 		.pipe(gulpIf(isDevelopment, rev.manifest('css.json')))
// 		.pipe(gulpIf(isDevelopment, gulp.dest('manifest')))
// });
//
// gulp.task('clean', function(){
// 	return del('public');
// });
//
// gulp.task('assets', function(){
// 	return gulp.src('frontend/assets/**/*.*', {since: gulp.lastRun('assets')})
// 		.pipe(newer('public'))
// 		.pipe(gulp.dest('public'));
// });
//
// gulp.task('styles:assets', function(){
// 	return gulp.src('frontend/styles/**/*.{svg,png,gif,jpg}', {since: gulp.lastRun('styles:assets')})
// 		.pipe(gulp.dest('public/styles'));
// });
//
// gulp.task('build', gulp.series(
// 	'clean',
// 	gulp.parallel('styles:assets','styles','assets'))
// );
//
// gulp.task('watch', function(){
// 	gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
// 	gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
// 	gulp.watch('frontend/styles/**/*.{svg,png}', gulp.series('styles:assets'));
// });
//
//
// gulp.task('serve', function(){
// 	browserSync.init({
// 		server: 'public'
// 	});
// 	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
// });
//
// gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve'))
// );