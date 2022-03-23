import { FastifyInstance } from 'fastify';

import exampleHook from './example';

export default function addHooks(app: FastifyInstance) {
  exampleHook(app);
}
