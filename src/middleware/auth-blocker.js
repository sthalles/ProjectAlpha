/**
 * Middleware responsible for blocking access to the api
 * when user is not logged in, this middleware is called
 * for each request and before any of out routes
 * @param {object} request  html request object
 * @param {object} response  html response object
 * @param {object} next   function to call the next middleware in the stack
 */
module.exports = function(request, response, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (request.isAuthenticated()) {
    return next();
  }

  console.log('Api Blocker\n');

  // if the user is not authenticated then redirect him to the login page
  return response.status(300).send({redirect: '/login'});
  // return response.redirect('/#login');
}
