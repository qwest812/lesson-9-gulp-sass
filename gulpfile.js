var gulp = require('gulp');
var sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('hello', function() {
    console.log('Hello Zell');
    // done();
});

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task("sass:watch", () => watchSass([
    'app/scss/styles.scss',
    // "./public/**/*.{scss,css}",
    // "!./public/libs/**/*"
])
    .pipe(sass())
    .pipe(gulp.dest("app/css")));