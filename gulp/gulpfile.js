
const   gulp                = require('gulp'), 
        babel               = require('gulp-babel'),
        concat              = require('gulp-concat'),
        autoprefixer        = require('gulp-autoprefixer'),
        minifyCss           = require('gulp-clean-css'),
        sourcemaps          = require('gulp-sourcemaps'),
        plumber             = require('gulp-plumber'),
        uglify              = require('gulp-uglify'),
        browsersync         = require('browser-sync').create()

// Concat and minify CSS files
gulp.task('build-css', () => {
    return gulp.src('src/assets/css/custom.css')
    .pipe(concat('style.css'))
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../src/assets/css'));
});

// Concat and minify application specific JS files
// gulp.task('build-js', function () {
//     return gulp.src(['src/assets/js/theme.js'])
//         .pipe(concat('app.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('../src/assets/js'));
// });

gulp.task('build-js', async function () {
    gulp.src(['src/assets/js/theme.js'])
        .pipe(concat('app.min.js'))
        .pipe(babel({presets: ['@babel/preset-env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('../src/assets/js'));
   });
   

// Start session
gulp.task("session-start", (cb) => {
    return gulp.series('build-css', 'build-js')(cb);
});

// gulp.task("session-start", (cb) => {
//     return gulp.series('build-css')(cb);
// });

// static server and watching CSS/JS/HTML files for changes
gulp.task("server", (done) => {
    browsersync.init({
        server: './build',
        directory: true
    });
  
    // Watch for file changes
    gulp.watch('src/assets/css/*.css', gulp.series('session-start'), browsersync.reload);
    gulp.watch('.src/assets/js/*.js', gulp.series('session-start'), browsersync.reload);
    
  
  });
  
  gulp.task('default', gulp.series('session-start', 'server'));