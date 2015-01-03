var development = 'build/development';
var developmentAssets = 'build/assets';
var src = 'app';
var srcAssets = 'app/_assets';
var production = 'build/production';
var productionAssets = 'build/production/assets';

module.exports = {
    delete: {
        src: [developmentAssets]
    },
    jekyll: {
        development: {
            src: src,
            destination: development,
            config: src + '/_config.yml'
        }
    },
    sass: {
        src:  srcAssets + '/scss/**/*.{sass,scss}',
        dest: developmentAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    optimize: {
        css: {
            source: developmentAssets + '/css/*.css',
            destination: productionAssets + '/css',
            options: {
                keepSpecialComments: 0
            }
        }
    }
};
