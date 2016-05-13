'use strict';

angular
  .module('main')
  .factory('Password', Password);

Password.$inject = ['$resource', 'Config'];

function Password ($resource, Config) {
  var service = $resource(Config.ENV.SERVER_URL + 'api/account/change_password', {}, {});

  return service;
}
