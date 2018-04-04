const cache = {};
function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}
importAll(require.context("../core", true, /\.js$/));

import angular from 'angular';
import '../style/app.css';
import wpw from 'legacyroot';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    console.log(wpw);
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
