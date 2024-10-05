// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  experimental:{env: {
    schema:{
      EMAIL_FROM: envField.string({context:'client',access:'public'}),
      EMAIL_DEST: envField.string({context:'client',access:'public'}),
      RESEND_API_KEY: envField.string({context:'client',access:'public'}),
    }
    // Add environment variables here...
  }},
  site: 'https://xCarlos19.github.io',
  base: '/',
  output: 'server',
  adapter: vercel(),
});