angular.module( 'selfServiceApp.tilesModule' )
    .controller( 'tilesController',
    ['$scope',
     '$translate',
     function( $scope, $translate) {
        'use strict';


        // stash a ref to the controller object, and the various parent objects
        var vm = this;

        vm.tiles = [
        	{ 
        		'title': 'Apache',
        		'subtitle': '$4.00 / Month',
        		'img': 'apache.jpg'
        	},
        	{ 
        		'title': 'JBoss Data Grid',
        		'subtitle': '$2.00 / Month',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss EAP',
        		'subtitle': '$2.00 / Month',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss Portal',
        		'subtitle': '$2.00 / Month',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss Web Server',
        		'subtitle': '$4.00 / Month',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'MongoDB',
        		'subtitle': '$6.50 / Month',
        		'img': 'mongo.jpg'
        	},
        	{ 
        		'title': 'MySql',
        		'subtitle': '$4.00 / Month',
        		'img': 'mysql.jpg'
        	},
        	{ 
        		'title': 'Wordpress',
        		'subtitle': '$8.00 / Month',
        		'img': 'wordpress.jpg'
        	}
        ];

    }] );