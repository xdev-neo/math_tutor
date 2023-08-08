const { watch, series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

const path = {
    style: {
        src: 'sass/main.scss',
        watch: 'sass/**/*.scss',
        dest: 'assets/'
    }
}

const cStyle = (cb) => {
    src(path.style.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(require('gulp-autoprefixer')())
        .pipe(dest(path.style.dest))
    cb();
}

const wStyle = () => {
    watch(path.style.watch, cStyle)
}

exports.cwStyle = wStyle;