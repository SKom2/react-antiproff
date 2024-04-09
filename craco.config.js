const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
};
