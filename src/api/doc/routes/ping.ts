export default {
  routes: [
    {
      method: 'GET',
      path: '/ping',
      handler: 'doc.healthCheck',
      config: {
        auth: false,
        description: 'Эндпоинт для проверки активности сервера'
      }
    }
  ]
};