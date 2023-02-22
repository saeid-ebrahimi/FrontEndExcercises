'use strict';
import {deleteAsync} from 'del';
import gulp from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import uglify from "gulp-uglify"
import usemin from "gulp-usemin"
import rev from 'gulp-rev'
import cleanCss from "gulp-clean-css"
import flatmap from "gulp-flatmap"
import htmlmin from "gulp-htmlmin"
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', gulp.series('sass'));
});

gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Default task
gulp.task('default', gulp.series('browser-sync' ,function() {
    gulp.start('sass:watch');
}));

gulp.task("clean", function() {
    return deleteAsync(['dist'])
})

gulp.task('copyfonts', function(done){
    gulp.src("./node_modules/font-awesome/fonts/**/*.{ttf,wof,eof,svg}*")
    .pipe(gulp.dest("./dist/fonts"))
     done();
})

gulp.task("imagemin", function(done) {
    return gulp.src("img/*.{png,jpg,gif}")
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest("dist/img"))
     done();
})

gulp.task('usemin', function(){
    return gulp.src("./*html")
    .pipe(flatmap(function(stream,file){
        return stream
        .pipe(usemin({
            css: [rev()],
            html: [function() {return htmlmin({collapseWhitespace:true})}],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [cleanCss(), "concat"]
        }))
    }))
    .pipe(gulp.dest('dist/'))
})
gulp.task("build",
    gulp.series(gulp.parallel('copyfonts','imagemin', 'usemin'), function (done) {
        done();
    })
);