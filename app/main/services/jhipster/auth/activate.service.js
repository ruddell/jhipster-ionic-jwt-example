'use strict';

angular
  .module('main')
  .factory('Activate', Activate);

Activate.$inject = ['$resource', 'Config'];

function Activate ($resource, Config) {
  var service = $resource(Config.ENV.SERVER_URL + 'api/activate', {}, {
    'get': { method: 'GET', params: {}, isArray: false}
  });

  return service;
}
