const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css",
    [require("postcss-import"), require("tailwindcss"), require("autoprefixer")]
);
mix.js("resources/js/lib/max-heap.js", "public/js/lib");
mix.js("resources/js/lib/SinglyLinkedList.js", "public/js/lib");
mix.js("resources/js/components/money-table.js", "public/js/components/money-table.js");
