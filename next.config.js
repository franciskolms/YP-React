const optimizedImages = require('next-optimized-images');
module.exports = optimizedImages({
        handleImages: ['jpeg', 'jpg', 'svg'],
        optimizeImages: true,
        optimizeImagesInDev: true,
        mozjpeg: {
            quality: 60,
          },
        optipng: {
            optimizationLevel: 3,
            },
        target: "serverless",
});