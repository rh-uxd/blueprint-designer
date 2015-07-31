angular.module( 'selfServiceApp.appModule' )
    .controller( 'appController',
    ['$scope',
     '$rootScope',
     function( $scope,
         $rootScope) {

         'use strict';

         var vm = this;

         //Navigation items
         vm.items = {
            "primary": [
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
    	    ],
            "secondary": [
              {
                "title": "Help",
                "icon": "fa fa-question-circle"
              },
              {
                "title": "About Me",
                "icon": "fa fa-user"
              },
              {
                "title": "Search",
                "icon": "fa fa-search"
              },
            ]
         };

        //Navigation state variables
        vm.isCollapsed = false;
        vm.showMobileNav = false;
        vm.isMobileNav = false;
        vm.shouldCollapse = false;

        vm.toggleNavigation = function() {
          vm.showMobileNav = !vm.showMobileNav;
          console.log(vm.showMobileNav);
        }


        //Notifications list
        vm.notifications = [
            {
                'text': 'Modified Datasources ExampleDS'
            },
            {
                'text': 'Error: System Failure'
            }
        ];

        vm.clearNotifications = function() {
            vm.notifications = [];
        };

     }] );
