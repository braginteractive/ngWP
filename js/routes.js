angular.module('app')
.config( function($locationProvider, $stateProvider, $urlRouterProvider) {

    // Remove the # from the URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
   $urlRouterProvider.otherwise("/home");

    $stateProvider
        // All the different routes
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })

        .state('home.more', {
            templateUrl: 'partials/home.more.html',
        })

        .state('home.features', {
            templateUrl: 'partials/home.features.html',
        })

        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partials/about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { template: 'Look I am a column!'
                }
            },
            resolve: {
              $title: function() { return 'About'; }
            }
            
        })

        .state('posts', {
            url: '/posts',
            resolve: {
                posts: function(PostsService) {
                   return PostsService.getPosts();
                },
                allposts: function(PostsService) {
                    return PostsService.getAllPosts();
                },
                $title: function() {
                    return 'Posts';
                },
            },
            templateUrl: 'partials/posts.html',
            controller: 'PostsController',
            controllerAs: 'posts',
        })

        .state('post', {
            url: '/post/:slug',
            resolve: {
                post: function($stateParams, PostsService) {
                    return PostsService.getPost($stateParams);
                },
                $title: function(post) {
                    return post.data[0].title.rendered;
                },
            },
            templateUrl: 'partials/single.html',
            controller: 'PostController',
            controllerAs: 'posts'
        })

        .state('pages', {
            url: '/pages',
            resolve: {
                posts: function($stateParams, PostsService) {
                    return PostsService.getPages();
                },
                $title: function() {
                    return 'Pages';
                },
            },
            templateUrl: 'partials/posts.html',
            controller: 'PostsController',
            controllerAs: 'posts'
        })

        .state('page', {
            url: '/page/:slug',
            resolve: {
                post: function($stateParams, PostsService) {
                    return PostsService.getPage($stateParams);
                },
                $title: function(post) {
                   return post.data[0].title.rendered;
                },
            },
            templateUrl: 'partials/single.html',
            controller: 'PostController',
            controllerAs: 'posts'
        })

        .state('pagination', {
            url: '/posts/page/:number',
            resolve: {
                posts: function($stateParams, PostsService) {
                    return PostsService.postsPagination($stateParams);
                },
                allposts: function(PostsService) {
                    return PostsService.getAllPosts();
                },
                $title: function($stateParams) {
                   return 'Posts (' + $stateParams.number + ')' ;
                },
            },
            templateUrl: 'partials/posts.html',
            controller: 'PostsController',
            controllerAs: 'posts'
        })

        .state('search', {
            url: '/search/:query',
            resolve: {
                posts: function($stateParams, PostsService, $state) {
                    return PostsService.getSearchResult($stateParams);
                },
                allposts: function(PostsService) {
                    return PostsService.getAllPosts();
                },
                $title: function($stateParams) {
                   return $stateParams.query;
                },
            },
            templateUrl: 'partials/search.html',
            controller: 'PostsController',
            controllerAs: 'posts'
        });

});

angular.module('app')
.run(function($rootScope, $anchorScroll){
    // Scroll to the top of the page when route changes
      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $anchorScroll();
      });
    });