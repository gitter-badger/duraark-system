// infrastructure
exports.root = {
  type: 'blank-container'
};

exports.sip = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-sip.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5104:5004 -d',
      process: 'node app.js'
    }
  }
};

exports.web = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/workbench-ui.git',
    processBuild: 'npm install; npm install bower; node_modules/.bin/bower install',
    ignored: ['.build'],
    execute: {
      args: '-p 443:4200 -d',
      process: 'ember serve'
//      cwd: 'web'
    }
  }
};

