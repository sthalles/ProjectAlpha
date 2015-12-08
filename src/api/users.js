/**
 * This document defines the API for Users.
 * It responds to requests under /users
 */
var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.route('/')
    // get all users
    .get(function(req, res) {
      User.find(function(err, user) {
        if (err) {
          return res.send(500, {error: err });
        }
        return res.send(user);
      });
    })

    // store a new user
    .post(function(req, res) {
      var user = new User();
      user.name = req.body.name;

      user.save(function(err, user) {
        if (err) {
          return res.send(500, err);
        }
        return res.send(user);
      });
    });

// Specific users
router.route('/:id')
    // returns a particular user
    .get(function(req, res) {
      User.findById(req.params.id, function(err, user) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(user);
      });
    })

    // update existing user
    .put(function(req, res) {
      var user = {
        name: req.body.name,
      };

      var id = req.params.id;
      User.update({ _id: id }, { $set: user }, function(err, user) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(user);
      });
    })

    .delete(function(req, res) {
      User.findById(req.params.id).remove(function(err, user) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(user);
      });
    });


/**
 * Exporting router.
 */
module.exports = router;

