ngWP
==========

Angular app that uses the WP Rest API plugin.

[http://braginteractive.com/ngwp](DEMO) 
[http://braginteractive.com/the-adventure-of-building-my-first-angular-app-with-the-wordpress-rest-api/](Blog Post) about building ngWP 


#### Setup
Clone or download ngWP.

You will need node and gulp to setup ngWP. Once those are installed run `npm install`. From there you can run `gulp bower` to install all the front-end dependencies.

I have included several Gulp tasks to concat, minify, move, inject, and do all kinds of other things to the files. Here is the current workflow. 

Once you have installed all the modules with `npm install` you should be ready to start development or whatever you want to do with the app. All you need to do is run `gulp` from the command line. 

The `gulp` task runs the `gulp watch` task and will watch for any changes to the files within the `js` and `sass` directory. 

So your first change should be to the Angular service that is doing GET requests to the WordPress website you have the REST API plugin installed on. Go to `/js/services/posts-service.js` and at the top of the file change the value of the `url` variable. 

If you have the `gulp` task running, once you save the file all the gulp magic happens (check out the js task in gulpfile.js) and you should be able to see your posts. 

Open another command line window and run `gulp serve`. This will setup a little web server so you can view your Angular app. Go to `http://localhost:3000/` and you should be able to navigate through the different pages. 

That's it!


#### Customization
For customization, basic knowledge of the command line and the following dependencies are required:

- Angular ([https://angularjs.org/](https://angularjs.org/)) 
- Node ([http://nodejs.org/](http://nodejs.org/)) -`npm install`
- Gulp ([http://gulpjs.com/](http://gulpjs.com/)) - `npm install --global gulp`
- Bower ([http://bower.io/](http://bower.io/)) -`npm install -g bower`


#### Gulp

`gulp` - automatically handles changes to files in the sass and js directories

`gulp fonts` - moves the Bootstrap font files from the bower directory into the root directory

`gulp vendorjs` - concatenate and minify certain javascript files from the bower directory 

`gulp vendorcss` - concatenate and minify certain css files from the bower directory 

`gulp js` - concatenate and minify the angular app javascript files

`gulp sass` - compile, prefix, and minify sass files

`gulp serve` - start a dev server

`gulp bower` - install bower components

`gulp zip` - creates a zipped file in the root directory. Ignores the bower_components and node_modules directories.







