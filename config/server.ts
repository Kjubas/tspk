module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'tay7Pl3WIWmXiYmwXdQcTQ==',
      'fbk2KcQl9kbEKmLcinmA7Q==',
      '7OT1GlGxmb8XetotxNbhJA==',
      'wOWFBDNDE0z2LfDFwRLE2w=='
    ]),
  },
});