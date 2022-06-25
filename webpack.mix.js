const mix = require('laravel-mix');

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

mix.js('resources/frontend/js/app.js', 'public/frontend/js')
    .vue()
    .sass('resources/frontend/sass/app.scss', 'public/frontend/css');

mix.js('resources/crud/js/app.js', 'public/crud/js')
    .vue()
    .sass('resources/crud/sass/app.scss', 'public/crud/css');
