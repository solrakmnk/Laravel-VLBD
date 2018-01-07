let { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.webpackConfig({
   output: {
     publicPath: "/",
     chunkFilename: 'js/[name].[chunkhash].js'
   },
   resolve: {
     alias: {
       'components': path.resolve(__dirname, 'resources/assets/js/components'),
       'styles': path.resolve(__dirname, 'resources/assets')
     }
   }
 })

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .extract(['vue', 
             'chartist-plugin-tooltip', 
             'vue-router', 
             'chartist', 
             'v-tooltip', 
             'vue-notifyjs'
             ]);
