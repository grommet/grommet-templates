import path from 'path';

export default {
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