// infrastructure
exports.root = {
  type: 'blank-container'
};

exports.workbenchui = {
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
    }
  }
};

exports.files = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-files.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5001:5001 -d',
      process: 'node app.js'
    }
  }
};

exports.ifcmetadata = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-ifcmetadata.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5002:5002 -d',
      process: 'node app.js'
    }
  }
};

exports.e57metadata = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-e57metadata.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5003:5003 -d',
      process: 'node app.js'
    }
  }
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
      args: '-p 5004:5004 -d',
      process: 'node app.js'
    }
  }
};

exports.sda = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-sda.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5005:5005 -d',
      process: 'node app.js'
    }
  }
};

exports.semanticenrichment = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-semanticenrichment.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5006:5006 -d',
      process: 'node app.js'
    }
  }
};

exports.sipgenerator = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/duraark/microservice-sipgenerator.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 5007:5007 -d',
      process: 'node app.js'
    }
  }
};

