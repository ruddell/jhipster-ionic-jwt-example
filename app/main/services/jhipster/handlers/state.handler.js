'use strict';

angular
  .module('main')
  .factory('stateHandler', stateHandler);

stateHandler.$inject = ['$rootScope', '$state',  '$window',
  'Auth', 'Principal'];

function stateHandler ($rootScope, $state,  $window,
                      Auth, Principal) {
  return {
    initialize: initialize
  };

  function initialize () {
    $rootScope.back = back;

    var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
      $rootScope.toState = toState;
      $rootScope.toStateParams = toStateParams;

      if (Principal.isIdentityResolved()) {
        Auth.authorize();
      }


    });

    var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess',  function (event, toState, toParams, fromState, fromParams) {

      // Remember previous state unless we've been redirected to login or we've just
      // reset the state memory after logout. If we're redirected to login, our
      // previousState is already set in the authExpiredInterceptor. If we're going
      // to login directly, we don't want to be sent to some previous state anyway
      if (!$rootScope.redirected && $rootScope.previousStateName) {
        $rootScope.previousStateName = fromState.name;
        $rootScope.previousStateParams = fromParams;
      }

    });

    $rootScope.$on('$destroy', function () {
      if (angular.isDefined(stateChangeStart) && stateChangeStart !== null) {
        stateChangeStart();
      }
      if (angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null) {
        stateChangeSuccess();
      }
    });

    function back () {
      // If previous state is 'activate' or do not exist go to 'home'
      if ($rootScope.previousStateName === 'activate' || angular.isUndefined($state.get($rootScope.previousStateName))) {
        $state.go('home');
      } else {
        $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
      }
    }
  }
}
