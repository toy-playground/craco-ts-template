import path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    },
  },
};
