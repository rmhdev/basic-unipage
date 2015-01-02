var development = 'build/development';
var developmentAssets = 'build/assets';
var src = 'app';

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
    }
};
