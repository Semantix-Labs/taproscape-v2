// next.config.mjs
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default {
  webpack: (config, { isServer }) => {
    if (isServer) {
      execAsync('node ./generate-sitemap.js')
        .then(() => console.log('Sitemap generated successfully'))
        .catch((err) => console.error('Failed to generate sitemap', err));
    }

    return config;
  }
};
