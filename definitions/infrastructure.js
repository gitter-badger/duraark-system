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
      process: 'app.js'
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
    name: 'duraark/workbench-ui@0.5.1',
    //repositoryUrl: 'https://github.com/duraark/workbench-ui.git',
    processBuild: 'npm install; npm install bower; node_modules/.bin/bower install',
    ignored: ['.build'],
    execute: {
      args: '-p 443:4200 -d',
      process: 'DURAARK_API_ENDPOINT=http://juliet.cgv.tugraz.at/api/v0.1 ember serve'
//      cwd: 'web'
    }
  }
};

