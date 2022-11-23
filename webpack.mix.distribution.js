/**
 * Laravel mix - Fancy Treeview
 *
 * Output:
 * 		- dist
 *        - resources
 *          - css
 *          - lang (.mo files)
 *          - views
 *        FancyImagebarModule.php
 *        module.php
 *        LICENSE.md
 *        README.md
 *
 */

let mix = require('laravel-mix');
let config = require('./webpack.mix.config');
require('laravel-mix-clean');

mix
  .setPublicPath('./dist')
  .copyDirectory(config.public_dir + '/views', config.dist_dir + '/resources/views')
  .copy(config.public_dir + '/lang/*.mo', config.dist_dir + '/resources/lang')
  .copy(config.build_dir + '/style.css', config.dist_dir + '/resources/css/style.css')
  .copy('FancyTreeviewModule.php', config.dist_dir)
  .copy('module.php', config.dist_dir)
  .copy('LICENSE.md', config.dist_dir)
  .copy('README.md', config.dist_dir)
  .clean();
