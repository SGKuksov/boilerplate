const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const { scss } = require('./scss');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { video } = require('./video');
const { svgsprite } = require('./svgsprite');
const { svgspritehtml } = require('./svgspritehtml');
const config = require('./config');

const serve = () => {
  browserSync.init({
    server: config.output,
    startPath: 'index.html',
    open: false,
    port: 8081,
  });

  watch(config.pages.watch).on(['change', 'add', 'unlink'], series(twig, browserSync.reload));

  watch(config.styles.watch).on(['change', 'add', 'unlink'], series(scss, browserSync.reload));

  watch(config.scripts.watch).on(['change', 'add'], series(javascript, browserSync.reload));

  watch(config.img.input).on(['change', 'add', 'unlink'], series(img, browserSync.reload));

  watch(config.video.input).on(['change', 'add', 'unlink'], series(video, browserSync.reload));

  watch(config.fonts.input).on(['change', 'add', 'unlink'], series(fonts, browserSync.reload));

  watch(config.svgsprite.input).on(
    ['change', 'add', 'unlink'],
    series(svgsprite, svgspritehtml, browserSync.reload)
  );
};

exports.serve = serve;
