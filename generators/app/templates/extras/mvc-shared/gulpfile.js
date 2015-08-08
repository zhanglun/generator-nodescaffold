var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload')<% if(options.cssPreprocessor == 'sass'){ %>,
  sass = require('gulp-ruby-sass')<% } %><% if(options.cssPreprocessor == 'node-sass'){ %>,
  sass = require('gulp-sass')<% } %><% if(options.cssPreprocessor == 'less'){ %>,
  less = require('gulp-less')<% } %><% if(options.cssPreprocessor == 'stylus'){ %>,
  stylus = require('gulp-stylus')<% } %>;
<% if(options.cssPreprocessor == 'sass'){ %>
gulp.task('sass', function () {
  return sass('./src/css/')
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.scss', ['sass']);
});<% } %><% if(options.cssPreprocessor == 'node-sass'){ %>
gulp.task('sass', function () {
  gulp.src('./src/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.scss', ['sass']);
});<% } %><% if(options.cssPreprocessor == 'less'){ %>
gulp.task('less', function () {
  gulp.src('./src/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.less', ['less']);
});<% } %><% if(options.cssPreprocessor == 'stylus'){ %>
gulp.task('stylus', function () {
  gulp.src('./src/css/*.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.styl', ['stylus']);
});<% } %>

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee <%= options.viewEngine %>',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [<% if(options.cssPreprocessor == 'sass'){ %>
  'sass',<% } %><% if(options.cssPreprocessor == 'node-sass'){ %>
  'sass',<% } %><% if(options.cssPreprocessor == 'less'){ %>
  'less',<% } %><% if(options.cssPreprocessor == 'stylus'){ %>
  'stylus',<% } %>
  'develop'<% if(options.cssPreprocessor == 'sass' ||
                options.cssPreprocessor == 'node-sass' ||
                options.cssPreprocessor == 'less' ||
                options.cssPreprocessor == 'stylus'){ %>,
  'watch'<% } %>
]);
