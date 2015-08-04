angular.module('appModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/app/directives/left-hand-navigation.html',
    "<div class=\"navigation pf-navigation\" ng-class=\"{collapsed: isCollapsed, hidden: isMobileNav, showMobileNav: showMobileNav}\"><div class=\"pf-navigation-inner\"><a class=\"action-collapse fa fa-angle-double-left\" ng-class=\"{'fa-angle-double-right': isCollapsed}\" ng-click=\"isCollapsed = !isCollapsed; forceNavCollapse = false\"></a><div class=\"pf-navigation-primary\"><aside class=\"list-group\"><a ng-click=\"navigate(item)\" href=\"{{ item.href }}\" class=\"list-group-item\" ng-repeat=\"item in items.primary\" ng-class=\"{'isActive': item.active}\"><i class=\"{{ item.icon }}\"></i> <span class=\"list-group-item-value\">{{ item.title }}</span> <span ng-if=\"item.count\" class=\"count\">{{ item.count }}</span></a><div ng-if=\"showMobileNav\" class=\"list-group-item-secondary\"><a ng-click=\"navigate(item)\" href=\"{{ item.href }}\" class=\"list-group-item\" ng-repeat=\"item in items.secondary\" ng-class=\"{'isActive': item.active}\"><i class=\"{{ item.icon }}\"></i> <span class=\"list-group-item-value\">{{ item.title }}</span> <span ng-if=\"item.count\" class=\"count\">{{ item.count }}</span></a></div></aside></div></div></div>"
  );


  $templateCache.put('modules/app/views/app.html',
    "I am an app"
  );

}]);
