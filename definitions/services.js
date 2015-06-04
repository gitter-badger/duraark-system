// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.redis = {
  type: 'docker',
  specific: {
    name: 'redis',
    execute: {
      args: '-d -p 6379:6379'
    }
  }
};
