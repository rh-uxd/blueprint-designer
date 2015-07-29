angular.module( 'selfServiceApp.appModule' )
    .controller( 'appController',
    ['$scope',
     '$rootScope',
     function( $scope,
         $rootScope) {

         'use strict';

         var vm = this;

         vm.username = "Jeremey Smith";

         vm.isCollapsed = false;
         vm.showMobileNav = false;
         vm.isMobileNav = false;

         vm.items = [
        	{
            	"title": "Dashboard",
            	"href": "#/dashboard",
            	"icon": "fa fa-dashboard"
        	},
        	{
            	"title": "My Services",
            	"href": "#/dashboard",
            	"icon": "fa fa-file-o",
            	"count": "12"
        	},
        	{
            	"title": "My Requests",
            	"href": "#/dashboard",
            	"icon": "fa fa-file-text-o",
            	"count": "2"
        	},
        	{
            	"title": "Service Catalog",
            	"href": "#/dashboard",
            	"icon": "fa fa-copy",
            	"active": true
        	}
    	];

     }] );
