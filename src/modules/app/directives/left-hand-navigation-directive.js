(function () {

	'use strict';

	angular.module( 'selfServiceApp.appModule') .directive('navigation', ['$window', leftHandNavigationDirective]);

	function leftHandNavigationDirective($window) {
		return {
			restrict: 'A',
			scope: {
				items: '=',
				isCollapsed: '=',
				forceNavCollapse: '=',
				showMobileNav: '=',
				isMobileNav: '=',
				navigate: '&'
			},
			replace: true,
			templateUrl: 'modules/app/directives/left-hand-navigation.html',
			link: function ($scope) {
				var breakpoints = {
					'tablet': 768,
					'desktop': 1024
				};

				//collapse based on size of window
				var win = angular.element($window);

				win.bind('resize', function () {
					$scope.$apply();
				});

				$scope.getWindowWidth = function () {
					return win.width();
				};

				//Listen on window resize
				$scope.$watch($scope.getWindowWidth,  function (newValue, oldValue) {
					checkNavResize(newValue);
				}, true );

				var checkNavResize = function (width) {
					//Always remove the hidden & peek class
					$scope.isMobileNav = false;
					$scope.showMobileNav = false;

					// Force collapsed nav state based on developer state
					if ( $scope.forceNavCollapse ) {
						$scope.isCollapsed = true;
					} else {
						$scope.isCollapsed = (width < breakpoints.desktop);
					}

					//Mobile state - must always hide
					if (width < breakpoints.tablet) {
						//Set the nav to being hidden
						$scope.isMobileNav = true;

						//Give the expanded state of the nav
						$scope.isCollapsed = false;
					}
				};

				//Set the initial state
				checkNavResize($scope.getWindowWidth());

			}
		};
	}

})();
