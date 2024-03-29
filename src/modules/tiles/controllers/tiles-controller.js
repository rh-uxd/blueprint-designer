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
        		'more': 'The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP server for modern operating systems including UNIX and Windows NT',
        		'img': 'apache.jpg'
        	},
        	{ 
        		'title': 'JBoss Data Grid',
        		'more': 'Data grids are in-memory distributed databases designed for scalability and fast access to large volumes of data. More than just a distributed caching solution, data grids also offer additional functionality such as map/reduce, querying, processing for streaming data, and transaction capabilities.',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss EAP',
        		'more': 'JBoss® Enterprise Application Platform 6 provides an innovative modular, cloud-ready architecture, powerful management and automation, and world class developer productivity.',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss Portal',
        		'more': 'JBoss Portal provides an open source platform for hosting and serving a portals Web interface, publishing and managing its content, and customizing its experience.',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'JBoss Web Server',
        		'more': 'Red Hat® JBoss® Web Server is a fully-integrated and certified set of components for hosting of Java™ web applications. It combines the world’s most deployed web server (Apache™ HTTP Server), the top servlet engine (Apache™ Tomcat), load balancers (mod_jk and mod_cluster), and the Tomcat Native library, with the best support in middleware.',
        		'img': 'jboss.jpg'
        	},
        	{ 
        		'title': 'MongoDB',
        		'more': 'MongoDB is a cross-platform document-oriented database. Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas, making the integration of data in certain types of applications easier and faster.',
        		'img': 'mongo.jpg'
        	},
        	{ 
        		'title': 'MySql',
        		'more': 'The worlds most popular open source database',
        		'img': 'mysql.jpg'
        	},
        	{ 
        		'title': 'Wordpress',
        		'more': 'WordPress.com is the best place for your personal blog or business site.',
        		'img': 'wordpress.jpg'
        	}
        ];

    }] );