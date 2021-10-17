module.exports = {
    gulp:             require('gulp'),
    gp:               require('gulp-load-plugins')(),
    bs:               require('browser-sync').create(),
    dev:              process.argv.pop() === 'dev',
    path: {
        serverDir:    './app/build',
        tasks:        require('./gulp/config'),
        src: {
                html: './app/src/*.{html,pug,jade}',
                css:  './app/src/style/*.scss',
                js:   './app/src/script/*.js',
                font: './app/src/fonts/**/*.ttf',
                img:  './app/src/images/**/*.*',
                svg:  './app/src/svg/**/*.svg',
                libs: './app/src/libs/**/**/*.*'
        },
        build: {
                html: './app/build/',
                css:  './app/build/style/',
                js:   './app/build/script/',
                font: './app/build/fonts/',
                img:  './app/build/images/',
                svg:  './app/build/svg/',
                libs: './app/build/libs/'
        },
        watch: {
                html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
                css:  './app/src/style/**/*.scss',
                js:   './app/src/script/*.js',
                font: './app/src/fonts/**/*.*',
                img:  './app/src/images/**/*.*',
                svg:  './app/src/svg/**/*.svg',
                libs: './app/src/libs/**/**/*.*'
        }
    }
     
}