export default {
  async healthCheck(ctx: any) {
    try {
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        message: 'Сервер активен'
      };
    } catch (error) {
      ctx.throw(500, 'Ошибка сервера');
    }
  }
};