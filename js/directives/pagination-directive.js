//postsNavLink Directive
function postsNavLink() {

	return {
		restrict: 'EA',
		templateUrl: 'partials/pagination-directive.html',
		// @ngInject
		controller:  function($scope, $stateParams) {

			var currentPage = ($stateParams.number === undefined) ? 1 : $stateParams.number,
				linkPrefix = '/posts/page/',
				postsCount = $scope.posts.allPosts;

			$scope.postsNavLink = {
				prevLink: linkPrefix + (parseInt(currentPage) - 1),
				nextLink: linkPrefix + (parseInt(currentPage) + 1),
				currentPage: currentPage,
				postsCount: (postsCount / 10)
			};
		}
	};

}

angular
	.module('app')
	.directive('postsNavLink', postsNavLink)

