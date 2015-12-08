/**
 * This document defines the API for Projects.
 * It responds to requests under /projects
 */
var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var User = mongoose.model('User');

router.route('/')
    // get all projects
    .get(function(req, res) {
      Project.find(function(err, project) {
        if (err) {
          return res.send(500, {error: 'Error in post project' });
        }
        return res.send(project);
      });
    })

    // store a new project
    .post(function(req, res) {
      User.findById(req.body.userId, function(err, user) {
        if (err) return res.send({error: err});

        var project = new Project();
        project.name = req.body.name;
        project.description = req.body.description;
        project._creator = user._id;

        project.save(function(err, project) {
          if (err) return res.send(500, err);
        });

        user.projects.push(project);
        user.save(function(err, user) {
          if (err) return res.send({error: err});
          return res.send(project);
        });
      });
    });

// Specific projects
router.route('/:id')
    // returns a particular project
    .get(function(req, res) {
      Project
          .findById(req.params.id)
          .populate('_creator')
          .exec(function(err, project) {
            if (err) {
              return res.send(500, {error: err});
            }
            return res.send(project);
          });
    })

    // update existing project
    .put(function(req, res) {
      var project = {
        name: req.body.name,
        description: req.body.description
      };

      var id = req.params.id;
      Project.update({ _id: id }, { $set: project }, function(err, project) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(project);
      });
    })

    .delete(function(req, res) {
      Project.findById(req.params.id).remove(function(err, project) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(project);
      });
    });


/**
 * Exporting router.
 */
module.exports = router;

