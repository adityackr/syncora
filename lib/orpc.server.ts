import 'server-only';

import { router } from '@/app/router';
import { createRouterClient } from '@orpc/server';

globalThis.$client = createRouterClient(router, {});
