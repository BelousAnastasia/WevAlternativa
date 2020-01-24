var gulp = require('gulp');
var less = require('gulp-less'); //преобразуем все файлы less в css
var path = require('path');
var autoprefixer = require('gulp-autoprefixer'); //автоматическое добавление префиксов для разных браузеров
var cleancss = require('gulp-clean-css'); //сжатие css файла
var browserSync = require('browser-sync').create(); //автоматическое обновление

// Compile sass into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'))
        
    .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.series('less', function() {

    browserSync.init({
        server: "./"  
    });

    gulp.watch(['./less/**/*.less'], gulp.series('less'));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

gulp.task('dev', gulp.parallel('serve'));