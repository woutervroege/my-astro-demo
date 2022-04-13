import { defineConfig } from 'astro/config';

import lit from '@astrojs/lit';
import nodejs from '@astrojs/node';

export default defineConfig({
  adapter: nodejs(),
  integrations: [lit()],
})