'use strict';

angular
  .module('main')
  .factory('PasswordResetInit', PasswordResetInit);

PasswordResetInit.$inject = ['$resource', 'Config'];

function PasswordResetInit ($resource, Config) {
  var service = $resource(Config.ENV.SERVER_URL + 'api/account/reset_password/init', {}, {});

  return service;
}
