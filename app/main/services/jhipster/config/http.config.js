'use strict';

angular
  .module('main')
  .config(httpConfig);

httpConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider', '$urlMatcherFactoryProvider'];

function httpConfig ($urlRouterProvider, $locationProvider, $httpProvider, $urlMatcherFactoryProvider) {

  $httpProvider.interceptors.push('authExpiredInterceptor');
  $httpProvider.interceptors.push('authInterceptor');

  $urlMatcherFactoryProvider.type('boolean', {
    name: 'boolean',
    decode: function (val) { return val === true || val === 'true'; },
    encode: function (val) { return val ? 1 : 0; },
    equals: function (a, b) { return this.is(a) && a === b; },
    is: function (val) { return [true, false, 0, 1].indexOf(val) >= 0; },
    pattern: /bool|true|0|1/
  });
}
