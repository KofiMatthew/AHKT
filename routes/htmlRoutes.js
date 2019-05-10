var db = require('../models');
const axios = require('axios');
const path = require('path');
module.exports = function(app) {
	// Load index page
	app.get('/', function(req, res) {
		res.render('index');
	});

	// Load dashboard page *** HOANG LE ***
	app.get('/dashboard', function(req, resp) {
		// console.log(req.user.GoogleID)
		db.User
			.findAll({
				where: {
					GoogleID: req.user.GoogleID
				},
				include: [ db.Lists, db.Shared ]
			})
			.then((res) => {
				resp.render('users/dashboard', {
					userPortfolio: res[0].dataValues,
					userRegistries: res[0].dataValues.Lists
				});
			})
			.catch((err) => console.log(err));
	});

	// Load index page
	app.get('/client/list/:id', function(req, resp) {
		const fullUrl = req.protocol + '://' + req.get('host');
<<<<<<< HEAD
		console.log(fullUrl);
=======
>>>>>>> master
		axios
			.get(`${fullUrl}/api/list/${req.params.id}`)
			.then((res) => {
				resp.render('clients/clientList', {
					lists: res.data
				});
			})
			.catch((err) => console.log(err));
	});

	//************* */ These are Kofi's:

	app.get('/shared_lists_all', function(req, res) {
<<<<<<< HEAD
    
		res.render('shared_lists_all/shared_all');
	});

	app.get('/shared_lists_single/:id', function(req, resp) {
    const fullUrl = req.protocol + '://' + req.get('host');
    console.log('URL',fullUrl);
    axios
    .get(`${fullUrl}/api/users`)
    // .get(`${fullUrl}/api/list/${req.params.id}`)
    .then((res) => {
      console.log(res.data);
      console.log('URL',`${fullUrl}/api/list/${req.params.id}`);
      resp.render('shared_lists_single/shared_single', {  
        userlists: res.data
      });
      // resp.render('clients/clientList', {
      //   lists: res.data
      // });
    })
    .catch((err) => console.log(err));
		// res.render('shared_lists_single/shared_single');
	});

=======
		res.render('shared_lists_all/shared_all');
	});

	app.get('/shared_lists_single', function(req, res) {
		res.render('shared_lists_single/shared_single');
	});
	app.get('/create_list', function(req, res) {
		res.render('forms/newList');
	});

	app.get('/new_item', function(req, res) {
		res.render('forms/newItem');
	});
>>>>>>> master
	//************** */
	// Render 404 page for any unmatched routes
	app.get('*', function(req, res) {
		res.render('404');
	});
<<<<<<< HEAD
};
=======
};
>>>>>>> master
