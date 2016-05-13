'use strict';

angular
  .module('main')
  .factory('PasswordResetFinish', PasswordResetFinish);

PasswordResetFinish.$inject = ['$resource', 'Config'];

function PasswordResetFinish ($resource, Config) {
  var service = $resource(Config.ENV.SERVER_URL + 'api/account/reset_password/finish', {}, {});

  return service;
}
