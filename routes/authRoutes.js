const express = require('express');
const route = express.Router();
const passport = require('passport');

route.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);
route.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/'
	}),
	function(req, resp) {
		// console.log(req.user);
		resp.redirect('/dashboard');
	}
);

route.get('/verify', (req, res) => {
	if (req.user) {
		// console.log(req.user);
	} else {
		console.log('not auth');
	}
});

route.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = route;
