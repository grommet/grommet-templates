// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var gulp = require('gulp');
var path = require('path');
var gulpTasks = require('grommet/utils/gulp/gulp-tasks');

var opts = {
  dist: path.resolve(__dirname, 'dist'),
  copyAssets: [
    'README.md',
    'package.json',
    {
      asset: 'src/js/**',
      babel: true
    }
  ],
  jsAssets: [
    'src/js/**/*.js'
  ],
  mainJs: 'src/js/index.js',
  webpack: {
    output: {
      filename: 'grommet-index.min.js',
      libraryTarget: 'var',
      library: 'GrommetIndex'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src/js']
    },
    externals: {
      'react': 'React',
      'grommet': 'grommet'
    }
  },
  scsslint: true
};

gulpTasks(gulp, opts);

gulp.task('dev', function () {
  console.error('Running "gulp dev" here is not supported. Please use "gulp dist".');
});
