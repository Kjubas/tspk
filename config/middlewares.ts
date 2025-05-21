module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', '*.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', '*.amazonaws.com'],
        },
      },
    },
  },
  'strapi::cors',
];