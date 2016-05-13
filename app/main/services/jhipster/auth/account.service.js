'use strict';

angular
  .module('main')
  .factory('Account', Account);

Account.$inject = ['$resource', 'Config'];

function Account ($resource, Config) {
  var service = $resource(Config.ENV.SERVER_URL + 'api/account', {}, {
    'get': { method: 'GET', params: {}, isArray: false,
      interceptor: {
        response: function (response) {
          // expose response
          return response;
        }
      }
    }
  });

  return service;
}
