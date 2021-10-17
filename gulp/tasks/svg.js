const svgSprite = require("gulp-svg-sprite");

module.exports = () =>
    $.gulp.task('svg', () =>
        $.gulp.src($.path.src.svg)
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: '../sprite.svg'
                    },
                },
                shape: {
                    transform: [
                        {
                            svgo: {
                                plugins: [
                                    {removeAttrs: {
                                        attrs: ['class', 'data-name', 'fill', 'storke.*']
                                    }}
                                ]
                            }
                        }
                    ]
                }
            }))
            .pipe($.gulp.dest($.path.build.svg))
            .on('end', $.bs.reload)
    )