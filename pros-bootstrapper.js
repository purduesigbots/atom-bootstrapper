'use babel';

import packageDeps from 'atom-package-deps';

export default {
  activate(state) {
    packageDeps.install('pros-bootstrapper', false).then(function() {
      console.log('All PROS plugins installed');
    })
  }

};
