const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


// Pathes
const path = {
    style: {
        src: 'sass/main.scss',
        watch: 'sass/**/*.scss',
        dest: 'style'
    }
}


// Style Compiler
const cStyle = (next) => {
    src(path.style.src).pipe(sass().on('error', sass.logError)).pipe(require('gulp-autoprefixer')()).pipe(dest(path.style.dest));
    next()
}

// Style Watcher
function wcStyle() {
    watch(path.style.watch, cStyle);
}



// Exports
exports.wcStyle = wcStyle;