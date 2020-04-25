// Use autorestart if in Docker 
// Use instances=1 if in Docker 

module.exports = {
  apps : [{
    name: 'fp-orders',
    script: 'npm',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'start',
    instances: 1,
    watch: false,
    max_memory_restart: '1G',
    instance_id_env: "NODE_APP_INSTANCE",
    error_file    : "/var/log/fp-orders.log",
    out_file    : "/var/log/fp-orders.log",
    merge_logs: true, 
    env: {
      PORT: 10011,
      NODE_ENV: "development",
      swagger_mockMode: true, 
      NODE_OPTIONS: "--inspect --inspect-port=9232"
    },
    env_production: {
      NODE_ENV: 'production',
      swagger_mockMode: true, 
      autorestart: false,
      instances: 1,
      PORT: 10011
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
