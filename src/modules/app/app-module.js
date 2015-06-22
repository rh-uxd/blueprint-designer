angular.module( 'sampleApp.appModule', [
    'ngResource',
    'ngRoute',
    'pascalprecht.translate',
    'sampleApp.dashboardModule',
] )
    .config( ['$routeProvider', '$translateProvider',
              function( $routeProvider, $translateProvider ) {
                  'use strict';

                  $routeProvider
                    .when('/dashboard', {
                    templateUrl: 'modules/dashboard/views/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm'
                  })
                  // Default
                  .otherwise({
                    redirectTo: '/dashboard'
                  });

                  $translateProvider.translations( 'default', 'en');
                  $translateProvider.preferredLanguage( 'default' );

              }
    ] )
