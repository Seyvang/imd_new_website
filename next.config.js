const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com']
  },
  basePath: '',
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/newprojects',
        permanent: true,
      },
    ]
  },
}
