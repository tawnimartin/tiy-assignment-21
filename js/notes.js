BACKBONE.ROUTER	

old way of doing it - example.com#page/one?foo=bar (server doesnt see everything after #)
html5 push state - example.com/page/one
 - only one request to the server, and adds /page/one, adds to your history.

 Backbone will handle it.. if html5 isn't supported by the browser, it won't use it.
//
 backbone.ROUTER
another constructor
has extend and initialize
has a routes hash - specify the routes and tell it which functions will run when those routes are triggered.

route looks like this "some/path" - what is going to appear in your URL
specify params
"products/:id" - : is a placeholder for a variable.
"categories/:category_id/products/:product_id"
if you want them calling the same function
	"categories/:category_id/products/(:product_id)" ?    --> categories/34/products/1

you can also add stuff ("page-1")
"categories/:category_id/products/page-:product_id"
categories/34/products/page-1

pass params to the function
productPage(34, 1)

Router.routes - you can define afterwards.. doesnt happen though 

how do you define the function

//

also navigate

router.navigate("categories/34/products/page-1")
its smart enought to know whether youre using push state or the hash url 

by default when you navigate by router.. it wont trigger a server request, it will just update the url and making everything bookmarkable and triggerable
it assumes you have the logic to deal with page=1

"ProductPage" (<--function)

router.navigate("categories/34/products/page-1", {trigger: true}) - will not make a request to the server, but it will CALL THE FUNCTION  you specify in router.

router has an event on it called ROUTER

you can add listeners to trigger anytime you have a route event
ex. if you were to have

router.on("route", function(route, args) {
	//route would be - "categories.....page-2"
	//args would be to [34, 2]

})

router.navigate("categories/34/products/page-2", {trigger: true})

//
the router works with Backbone.history
you dont have to create it.. to access it its just Backbone.history
once you have your router defined and everything ready you want to call Backbone.history.start()
start keeping track of that route and update the router
by default it uses the hash type but you can use
Backbone.history.start({pushState: true})
cant do pushstate on Python... maybe on a Node server












