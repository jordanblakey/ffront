const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  sfx = require('sfx'),
  changed = require('gulp-changed'),
  del = require('del'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  webpack = require('gulp-webpack'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  mozjpeg = require('imagemin-mozjpeg'),
  giflossy = require('imagemin-giflossy'),
  handlebars = require('gulp-compile-handlebars'),
  frontmatter = require('gulp-front-matter'),
  rename = require('gulp-rename')

const onError = function(err) {
  notify.onError({
    title: 'Gulp',
    subtitle: 'Failure!',
    message: 'Error: <%= error.message %>'
  })(err)
  sfx.pop()
  this.emit('end')
}

gulp.task('browserSync', function() {
  browserSync.create()
  browserSync.init({ server: { baseDir: './dist/' } })
})

gulp.task('sass', function() {
  gulp
    .src('./src/scss/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed('./assets/'))
    .pipe(concat('app.min.css'), { newline: '' })
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/assets/'))
})

gulp.task('scripts', function() {
  gulp
    .src(['./src/js/app.js'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(
      webpack({
        output: { filename: 'app.min.js' }
      })
    )
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(
      notify(function() {
        sfx.pop()
      })
    )
    .pipe(gulp.dest('./dist/assets/'))
})

gulp.task('img-min', function() {
  gulp
    .src('./src/img/**/*')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed('./assets/img/'))
    .pipe(
      imagemin([
        pngquant({ speed: 5 }),
        giflossy({ optimizationLevel: 3, optimize: 3, lossy: 30, colors: 256 }),
        mozjpeg({ quality: 85, fastcrush: true })
      ])
    )
    .pipe(gulp.dest('./dist/assets/img/'))
})

gulp.task('handlebars', function() {
  const templateData = {
    firstName: 'Kaanon'
  }
  const options = {
    ignorePartials: false,
    batch: [
      './src/views/_partials/components',
      './src/views/_partials/layouts'
    ],
    helpers: {
      capitals: function(str) {
        return str.toUpperCase()
      }
    }
  }

  gulp
    .src(['src/views/**/*.{hbs,html}', '!src/views/_partials/**/*.hbs'])
    .pipe(handlebars(templateData, options))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('del', function() {
  del.sync('dist')
})

gulp.task(
  'watch',
  ['browserSync', 'sass', 'scripts', 'handlebars', 'img-min'],
  function() {
    gulp.watch('./src/*.scss', ['sass', browserSync.reload])
    gulp.watch('./src/**/*.js', ['scripts', browserSync.reload])
    gulp.watch('./**/*.html', browserSync.reload)
  }
)
