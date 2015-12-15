/**
 * This document defines the API for Sprints.
 * It responds to requests under /sprints
 */
var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sprint = mongoose.model('Sprint');
var Project = mongoose.model('Project');

router.route('/')
    // get all tasks
    .get(function(req, res) {
      Sprint.find(function(err, sprint) {
        if (err) {
          return res.send(500, {error: 'Error in post task' });
        }
        return res.send(sprint);
      });
    })

    // store a new story
    .post(function(req, res) {
      Project.findById(req.body.projectId, function(err, project) {
        var sprint = new Sprint({
          name: req.body.name,
          description: req.body.description,
          _creator: project._id
        });

        sprint.save(function(err, sprint) {
          if (err) {
            return res.send(500, err);
          }
        });

        project.sprints.push(sprint);
        project.save(function(err, project) {
          if (err) return res.send({error: err});
          return res.send(sprint);
        });
      });
    });

// Specific tasks
router.route('/:id')
    // returns a particular task
    .get(function(req, res) {
      Sprint
          .findById(req.params.id)
          .populate('_creator')
          .populate('stories')
          .exec(function(err, sprint) {
            if (err) {
              return res.send(500, {error: err});
            }

            return res.send(sprint);
          });
    })

    // update existing task
    .put(function(req, res) {
      var sprint = {
        name: req.body.name,
        description: req.body.description
      };

      var id = req.params.id;
      Sprint.update({ _id: id }, { $set: sprint }, function(err, sprint) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(sprint);
      });
    })

    .delete(function(req, res) {
      Sprint.findById(req.params.id).remove(function(err, sprint) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(sprint);
      });
    });


/**
 * Exporting router.
 */
module.exports = router;

