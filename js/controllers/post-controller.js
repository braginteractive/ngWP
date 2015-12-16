function PostController(post) {

	// Get the single post data
	this.post = post.data[0];

	//console.log(post); 

}

angular
  .module('app')
  .controller('PostController', PostController);
