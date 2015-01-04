var development = 'build/development';
var buildAssets = 'build/assets';
var src = 'app';
var srcAssets = 'app/_assets';
var production = 'build/production';
var productionAssets = 'build/production/assets';
var developmentAssets = 'build/development/assets';
var build = 'build';

module.exports = {
    initialize: {
        src: [buildAssets]
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
            config: src + '/_config.yml,' + src + '/_config.production.yml'
        }
    },
    sass: {
        src:  srcAssets + '/scss/**/*.{sass,scss}',
        dest: buildAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    javascript: {
        src:  srcAssets + '/js/**/*.js',
        dest: buildAssets + '/js',
        options: {}
    },
    images: {
        src:  srcAssets + '/images/**/*.{jpg,jpeg,png,gif}',
        dest: buildAssets + '/images',
        options: {}
    },
    optimize: {
        css: {
            source: buildAssets + '/css/*.css',
            destination: productionAssets + '/css',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            source: buildAssets + '/js/*.js',
            destination: productionAssets + '/js',
            options: {
                name: "app.js"
            }
        },
        images: {
            source: buildAssets + '/images/*.{jpg,jpeg,png,gif}',
            destination: productionAssets + '/images',
            options: {
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            }
        },
        development: {
            source: buildAssets + '/**/*.{css,map,js,jpg,jpeg,png,gif}',//
            destination: developmentAssets,
            options: {}
        }
    },
    revision: {
        src: {
            assets: [
                productionAssets + '/css/*.{css,map}',
                productionAssets + '/js/*.js',
                productionAssets + '/images/**/*.{jpg,jpeg,png,gif}'
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
    },
    watch: {
        sass: srcAssets + '/scss/**/*.{scss,sass}',
        javascript: srcAssets + '/js/**/*.js',
        images: srcAssets + '/images/**/*.{jpeg,jpg,png,gif}',
        jekyll: [
            '_config.yml',
            '_config.build.yml',
            src + '/_data/**/*.{json,yml,csv}',
            src + '/_includes/**/*.{html,xml}',
            src + '/_layouts/*.html',
            src + '/_locales/*.yml',
            src + '/_plugins/*.rb',
            src + '/_posts/*.{markdown,md}',
            src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
            src + '/*'
        ]
    },
    browserSync: {
        server: {
            baseDir: [development, build, src]
        },
        port: 9999,
        files: [
            buildAssets + '/css/*.{css,map}',
            buildAssets + '/js/*.js',
            buildAssets + '/images/**/*.{jpeg,jpg,png,gif}'
        ]
    }
};
