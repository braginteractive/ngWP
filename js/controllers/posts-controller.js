function PostsController(allposts, posts, $stateParams) {

	// Get 10 posts at a time..
	this.posts = posts.data;

	// Get all posts so we can count for pagination.. 
   	this.allPosts = allposts.data.length;

   	//console.log(this.posts);

}

angular
  .module('app')
  .controller('PostsController', PostsController);

