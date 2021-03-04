# Basics
Cloud Nine 2.0 is an exercise in user-experience design and engineering; it is an e-commerce website created for a mock client with an emphasis on sleek aesthetics and motion graphics. 

# Preview
![Untitled-1](https://user-images.githubusercontent.com/41743572/78098736-e82cad80-73ad-11ea-82a1-6fb9ae746dd8.gif "Preview")

# Live Demo
Cloud Nine is hosted on Heroku and an [online demo can viewed here](https://cloudninebeauty.herokuapp.com/).

# Stack
Cloud Nine utilzes: 
* Node.js
* React
* Redux
* jQuery
* Express
* Sequelize 
* PostgreSQL
* Webpack
* Heroku
* WebGL and Three.js via react-text-fun
* Stripe
* Travis CI

# Features
Cloud Nine features:
* Two roles: guests (not signed in) and users (signed in)
* Add to cart / edit cart
* Persistent guest cart
* Checkout (submit order)
* Continuous Integration 
* Carts persist in database (can load cart on a new browser)
* Order history
* Accept payment (Stripe, Paypal/Venmo/Braintree, Bitcoin)
* Backend data validations
* Password security (salting/hashing)
* OAuth integration

# Start
Instructions for running in a local development environment:
1. Fork & clone the repo
2. `npm install`
3. `npm run seed`
4. `npm run start-dev`
5. Navigate to `localhost:8080`

# Previous Version
Cloud Nine 2.0 is heavily modified from a previous version. The previous version can be [viewed live here](https://cl0udnine.herokuapp.com/). While changes were solely designed and engineered on my own, the previous version of Cloud Nine was engineered in conjuction with [a team of contributors](https://github.com/team-myrel/cl0udnine) and through the use of a boilerplate. 
