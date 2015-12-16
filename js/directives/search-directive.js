//searchForm Directive
function searchForm() {

	/**
     * @ngInject
     */
	function searchFormController($scope, PostsService, $state) {

		$scope.getQuery = function(query) {
			return PostsService.queryPosts(query)
				.then(function(data) {
					//return limitToFilter(data.data, 5);
            		return data.data;
            		//console.log(data.data);

        		});
		};

		$scope.onSelect = function ($item, $model, $label) {
		   $scope.$item = $item;
		   $scope.$model = $model;
		   $scope.$label = $label;
		    	$state.go('search', {query: $scope.$label})
		        //console.log($scope.$label);
		};

		$scope.onSubmit = function() {
			$state.go('search', {query: $scope.searchQuery})
			//console.log($scope.searchQuery);
		};

	}

	return {
		restrict: 'EA',
		templateUrl: 'partials/search-form-directive.html', 
		controller: searchFormController
	}

}

angular
	.module('app')
	.directive('searchForm', searchForm)






  