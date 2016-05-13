'use strict';

angular
  .module('main')
  .factory('Register', Register);

Register.$inject = ['$resource', 'Config'];

function Register ($resource, Config) {
  return $resource(Config.ENV.SERVER_URL + 'api/register', {}, {});
}
