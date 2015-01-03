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
        },
        production: {
            src: src,
            destination: production,
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
    javascript: {
        src:  srcAssets + '/js/**/*.{js}',
        dest: developmentAssets + '/js',
        options: {}
    },
    optimize: {
        css: {
            source: developmentAssets + '/css/*.css',
            destination: productionAssets + '/css',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            source: developmentAssets + '/js/*.js',
            destination: productionAssets + '/js',
            options: {
                name: "app.js"
            }
        }
    },
    revision: {
        src: {
            assets: [
                productionAssets + '/css/*.css',
                productionAssets + '/js/*.js'
            ],
            base: production
        },
        dest: {
            assets: production,
            manifest: {
                name: 'manifest.json',
                path: productionAssets
            }
        }
    },
    collect: {
        src: [
            productionAssets + '/manifest.json',
            production + '/**/*.{html,xml,txt,json,css,js}',
            '!' + production + '/feed.xml'
        ],
        dest: production
    }
};
