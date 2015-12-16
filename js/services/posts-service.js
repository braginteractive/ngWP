function PostsService($http) {

    var self = this;
    var url = 'http://dev:8888/wp-json/wp/v2/';

    self.getPosts = function() {
        return $http.get( url + 'posts' );
    };

    self.getAllPosts = function() {
        return $http.get( url + 'posts' + '?filter[posts_per_page]=-1' );
    };

    self.getPost = function(name) {
        return $http.get( url + 'posts' + '?filter[name]=' + name.slug );
    };

    self.getPages = function() {
        return $http.get( url + 'pages' + '?filter[posts_per_page]=-1' );
    };

    self.getPage = function(name) {
        return $http.get( url + 'pages' + '?filter[name]=' + name.slug );
    };

    self.getSearchResult = function(s) {
        return $http.get( url + 'posts' + '?filter[s]=' + s.query + '&filter[posts_per_page]=-1');
    };

    self.queryPosts = function(s) {
        return $http.get( url + 'posts' + '?filter[s]=' + s + '&filter[posts_per_page]=-1');
    };

    self.postsPagination = function(page) {
        return $http.get( url + 'posts?page=' + page.number );
    };

}

angular
    .module('app')
    .service('PostsService', PostsService)