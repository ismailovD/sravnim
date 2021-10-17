global.$ = require('./gulp.config');

$.path.tasks.forEach(task => require(task)());

if($.dev) $.gulp.series($.gulp.parallel('css', 'html', 'js', 'img', 'svg', 'font', 'watch', 'server', 'libs'))()
else {
    $.gulp.src($.path.serverDir, {read: false})
    .pipe($.gp.clean({ force: true}))
    .pipe($.gulp.dest('./app/')
    .on('end', $.gulp.series($.gulp.parallel('css', 'html', 'js', 'img','svg', 'font', 'libs')))
    )
}
