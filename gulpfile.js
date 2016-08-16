// npm install --save-dev gulp gulp-util gulp-concat gulp-sass gulp-minify-css gulp-rename gulp-sourcemaps gulp-uglify del gulp-replace capitalize shelljs yargs camelcase

var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var del = require('del');
var sh = require('shelljs');
var replace = require('gulp-replace');
var capitalize = require('capitalize');
var argv = require('yargs').argv;
var camelCase = require('camelcase');

var paths = {
    sass: ['src/**/*.scss', '!src/modelo/*.scss'],
    js: ['src/**/*.js', '!src/modelo/*.js'],
    html: ['src/**/*html', '!src/modelo/*.html']
};

gulp.task('default', ['watch']);

gulp.task('dist', function () {
    gulp.src(paths.html)
        .pipe(gulp.dest('webdist'));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('webdist'));
});

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .on('error', sass.logError)
        .pipe(gulp.dest('./src/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./webdist/'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.html, ['dist']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('tela', function() {
    var nome = argv.name || 'tela';
    var rota = argv.rota || nome;
    var cls = argv.class || 'tela-'+nome;
    var path = argv.path || 'telas';
    var app = argv.app || 'app';

    gulp.src(['modelos/page-controller.js'])
        .pipe(replace('[[ctrl]]', capitalize.words(camelCase(nome))))
        .pipe(rename({ basename: nome, extname: '.controller.js' }))
        .pipe(gulp.dest('src/'+path+'/'+nome+'/'));

    gulp.src(['modelos/page-route.js'])
        .pipe(replace('[[func]]', capitalize.words(camelCase(nome))))
        .pipe(replace('[[nome]]', nome))
        .pipe(replace('[[rota]]', rota))
        .pipe(replace('[[path]]', path))
        .pipe(replace('[[app]]', app))
        .pipe(rename({ basename: nome, extname: '.router.js' }))
        .pipe(gulp.dest('src/'+path+'/'+nome+'/'));

    gulp.src(['modelos/page-style.scss'])
        .pipe(replace('[[class]]', cls))
        .pipe(rename({ basename: nome }))
        .pipe(gulp.dest('src/'+path+'/'+nome+'/'));

    gulp.src(['modelos/page-template.html'])
        .pipe(replace('[[titulo]]', capitalize.words(nome)))
        .pipe(replace('[[nome]]', nome))
        .pipe(replace('[[class]]', cls))
        .pipe(rename({ basename: nome }))
        .pipe(gulp.dest('src/'+path+'/'+nome+'/'));
});

gulp.task('diretiva', function () {
    var nome = argv.name || 'diretiva';
    var func = camelCase(nome);
    var path = argv.path || 'common/directives';
    var cls = argv.class || nome;
    var desc = argv.desc || 'Diretiva para exibir um component na tela';
    var vm = argv.vm || 'vm';
    var scope = argv.scope || "[scopo]: '[tipo-escopo]'";
    var app = argv.app || 'app';
    path += '/'+nome;

    gulp.src(['modelos/directive.js'])
        .pipe(replace('[[func]]', func))
        .pipe(replace('[[nome]]', nome))
        .pipe(replace('[[path]]', path))
        .pipe(replace('[[desc]]', desc))
        .pipe(replace('[[vm]]', vm))
        .pipe(replace('[[scope]]', scope))
        .pipe(replace('[[app]]', app))
        .pipe(rename({ basename: nome, extname: '.directive.js' }))
        .pipe(gulp.dest('src/'+path+'/'));

    gulp.src(['modelos/directive.html'])
        .pipe(replace('[[class]]', cls))
        .pipe(rename({ basename: nome, extname: '.directive.html' }))
        .pipe(gulp.dest('src/'+path+'/'));

    gulp.src(['modelos/page-style.scss'])
        .pipe(replace('[[class]]', cls))
        .pipe(rename({ basename: nome, extname: '.directive.scss' }))
        .pipe(gulp.dest('src/'+path+'/'));
});

gulp.task('service', function () {
    var nome = argv.name || 'servico';
    var serv = capitalize.words(camelCase(nome));
    var desc = argv.desc || 'Um service factory angular';
    var path = argv.path || 'common/services';
    var app = argv.app || 'app';

    gulp.src(['modelos/service.js'])
        .pipe(replace('[[nome]]', serv))
        .pipe(replace('[[desc]]', desc))
        .pipe(replace('[[app]]', app))
        .pipe(rename({ basename: nome, extname: '.service.js' }))
        .pipe(gulp.dest('src/'+path+'/'));
});
