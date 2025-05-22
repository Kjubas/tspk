module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/ping',
        handler: 'ping.find',
        config: { auth: false }
      }
    ],
  };