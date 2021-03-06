// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova','ionic.service.core',  'ionic.service.analytics', 'starter.controllers','chart.js'])



.run(function ($ionicPlatform, $ionicAnalytics) {
    $ionicPlatform.ready(function () {

        $ionicAnalytics.register();

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.startpage', {
        url: '/startpage',
        views: {
            'menuContent': {
                templateUrl: 'templates/startpage.html',
                controller: 'StartPageCtrl'
            }
        }
    })
        
       // .state('app.graph', {
       //    url: '/graph',
       //   views: {
       //   'menuContent': {
       //     templateUrl: 'templates/graph.html',
       //     controller: 'GraphCtrl'
       //  }
       //}
       // })
        .state('app.acceptance', {
            url: '/acceptance',
            views: {
                'menuContent': {
                    templateUrl: 'templates/acceptance.html',
                    controller: 'AcceptanceCtrl'
                }
            }
        })
    .state('app.help', {
        url: '/help',
        views: {
            'menuContent': {
                templateUrl: 'templates/help.html'
            }
        }
    })
        .state('app.cause', {
            url: '/cause',
            views: {
                'menuContent': {
                    templateUrl: 'templates/cause.html'
                }
            }
        })
     .state('app.profile', {
         url: '/profile',
         views: {
             'menuContent': {
                 templateUrl: 'templates/profile.html',
                 controller: 'profileCtrl'
             }
         }
     })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/startpage');
});
