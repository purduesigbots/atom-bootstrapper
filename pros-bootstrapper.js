'use babel';

const packageDeps = require('atom-package-deps');

export default {
  activate(state) {
    packageDeps.install('pros-bootstrapper', false).then(function() {
      console.log('All PROS plugins installed');
    })
  }

};
