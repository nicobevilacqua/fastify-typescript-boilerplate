import { RouteOptions, FastifyInstance } from 'fastify';

export async function onRequestHook(/* request: FastifyRequest, reply: FastifyReply */) {
  console.log('foo');
}

export default function register(app: FastifyInstance) {
  app.addHook('onRoute', (options: RouteOptions) => {
    if (!options.onRequest) {
      options.onRequest = [];
    }

    if (!Array.isArray(options.onRequest)) {
      options.onRequest = [options.onRequest];
    }

    options.onRequest.push(onRequestHook);
  });
}
