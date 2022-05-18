module.exports = {
  apps: [
    {
      name: 'fauxpenverse-frontend',
      exec_mode: 'cluster',
      instances: 'max',
      cwd: '/home/node/app',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: `start -c ${process.cwd()}/nuxt.config.ts`,
    },
  ],
}
