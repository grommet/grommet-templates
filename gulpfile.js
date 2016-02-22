// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var del = require('del');
var git = require('gulp-git');
var gulp = require('gulp');
var gulpTasks = require('grommet/utils/gulp/gulp-tasks');
var mkdirp = require('mkdirp');
var path = require('path');

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
      filename: 'grommet-templates.min.js',
      libraryTarget: 'var',
      library: 'GrommetTemplates'
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

gulp.task('release:createTmp', function(done) {
  del.sync(['./tmp']);
  mkdirp('./tmp', function(err) {
    if (err) {
      throw err;
    }
    done();
  });
});

gulp.task('release:stable', ['dist', 'release:createTmp'], function(done) {
  if (process.env.CI) {
    git.clone('https://' + process.env.GH_TOKEN + '@github.com/grommet/grommet-templates.git',
      {
        cwd: './tmp/'
      },
      function(err) {
        if (err) {
          throw err;
        }

        process.chdir('./tmp/grommet-templates');
        git.checkout('stable', function(err) {
          if (err) {
            throw err;
          }

          del.sync(['./**/*']);

          gulp.src('../../dist/**').pipe(gulp.dest('./')).on('end', function() {
            git.status({
              args: '--porcelain'
            }, function(err, stdout) {
              if (err) {
                throw err;
              }

              if (stdout && stdout !== '') {
                gulp.src('./')
                  .pipe(git.add({
                    args: '--all'
                  }))
                  .pipe(git.commit('Stable dev version update.')).on('end', function() {
                    git.push('origin', 'stable', { quiet: true }, function(err) {
                      if (err) {
                        throw err;
                      }

                      process.chdir(__dirname);
                      done();
                    });
                  });
              } else {
                console.log('No difference since last commit, skipping stable release.');

                process.chdir(__dirname);
                done();
              }
            });
          });
        });
      }
    );
  } else {
    console.warn('Skipping release. Release:stable task should be executed by CI only.');
  }
});

gulpTasks(gulp, opts);

gulp.task('dev', function () {
  console.error('Running "gulp dev" here is not supported. Please use "gulp dist".');
});
