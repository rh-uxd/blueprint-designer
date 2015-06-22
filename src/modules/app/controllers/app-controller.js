angular.module( 'sampleApp.appModule' )
    .controller( 'sampleApp.appController',
    ['$scope',
     '$rootScope',
     function( $scope,
         $rootScope) {

         'use strict';

         var vm = this;

         vm.username = "Jeremey Smith";

         vm.navigationItems = [
				{
					"title": "Calendar",
					"href": "#/calendar"
				},
				{
					"title": "Messages",
					"href": "#/messages"
				},
				{
					"title": "Analytics",
					"href": "#/analytics"
				}
			];

     }] );
