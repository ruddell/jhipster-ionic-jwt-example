'use strict';
angular.module('app', [
  // load your modules here
  'main',
  'ngResource',
  'ngCookies',
  'ngStorage'
]).run(run);
run.$inject = ['stateHandler'];

function run (stateHandler) {
  stateHandler.initialize();
}
