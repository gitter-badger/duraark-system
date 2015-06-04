// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'duraark';
exports.namespace = 'fraunhofer';
exports.id = 'df24db56-3e4e-4772-8cb9-9d2a3f99c211';

exports.topology = {
  development: {
    root: ['sip']
  }
};
