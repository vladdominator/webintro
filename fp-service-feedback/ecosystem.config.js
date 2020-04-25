
// Use autorestart if in Docker 
// Use instances=1 if in Docker 
module.exports = {
  "apps": [{
    "name": "fp-feedback",
    "script": "./bin/www",
    "exec_mode": "cluster",
    "watch": false,
    "instance_id_env": "NODE_APP_INSTANCE",
    "error_file"    : "/var/log/fp-feedback.log",
    "out_file"    : "/var/log/fp-feedback.log",
    "merge_logs": true, 
    "env": {
      "PORT": 3000,
      "NODE_ENV": "development",
      "NODE_OPTIONS": "--inspect --inspect-port=9232"
    },
    "env_production" : {
      "PORT": 3000,
      "NODE_ENV": "production",
      "instances": 1,
      "autorestart": false
    }
  }]
}