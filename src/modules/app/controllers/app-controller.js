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
                "title": "Launch",
                "icon": "fa pf-icon pficon-export fa-rotate-270"
              },
              {
                "title": "Notifications",
                "icon": "fa pficon-flag",
                "count": "2",
                "class": "notifications"
              },
              {
                "title": "Help",
                "icon": "fa pficon-help"
              },
              {
                "title": "About",
                "icon": "fa fa-info-circle"
              },
              {
                "title": "Preferences",
                "icon": "fa pficon-user"
              },
              {
                "title": "Log Out",
                "icon": "fa fa-sign-out"
              },
              {
                "title": "Search",
                "icon": "fa fa-search"
              },
            ]
         };

        //Navigation state variables - used for responsiveness
        vm.isCollapsed = false;
        vm.isMobileNav = false;

        //Navigation state variables - Used to peak mobile nav from hamburger menu in mobile state
        vm.showMobileNav = false;

        //Navigation state variables - Set this to true if you want the nav to collapse on page load
        vm.forceNavCollapse = false;

        vm.navigate = function(item) {
          //Hide the mobile nav  
          vm.showMobileNav = false;

          //ToDo - Set nav active state
          //Need to properly get back item
        }

        //Hooked up to hamburger icon to show the mobile navigation
        vm.toggleNavigation = function() {
          if (!vm.isMobileNav) {
            vm.isCollapsed = !vm.isCollapsed; 
            vm.forceNavCollapse = true;
          } else {
            vm.showMobileNav = !vm.showMobileNav;
          }
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
