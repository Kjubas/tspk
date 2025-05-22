module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

const axios = require('axios');

setInterval(() => {
  axios.get('https://your-strapi.onrender.com/api/ping')
    .catch(() => {});
}, 5 * 60 * 1000); // Каждые 5 минут пингуется