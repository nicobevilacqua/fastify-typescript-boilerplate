import { FastifyInstance } from 'fastify';

import ping from './ping';

export default function addHooks(app: FastifyInstance) {
  app.register(ping);
}
