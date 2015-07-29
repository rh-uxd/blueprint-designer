angular.module( 'selfServiceApp.appModule', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'pascalprecht.translate',
    'selfServiceApp.tilesModule',
] )
    .config( ['$routeProvider', '$translateProvider',
              function( $routeProvider, $translateProvider ) {
                  'use strict';

                  $routeProvider
                    .when('/tiles', {
                    templateUrl: 'modules/tiles/views/tiles-view.html',
                    controller: 'tilesController',
                    controllerAs: 'vm'
                  })
                  // Default
                  .otherwise({
                    redirectTo: '/tiles'
                  });

                  $translateProvider.translations( 'default', 'en');
                  $translateProvider.preferredLanguage( 'default' );

              }
    ] )
