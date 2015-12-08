/**
 * This document defines the API for Stories.
 * It responds to requests under /stories
 */
var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Story = mongoose.model('Story');
var Task = mongoose.model('Task');
var Sprint = mongoose.model('Sprint');

router.route('/')
    // get all tasks
    .get(function(req, res) {
      Story.find(function(err, story) {
        if (err) {
          return res.send(500, {error: 'Error in post task' });
        }
        return res.send(story);
      });
    })

    // store a new story
    .post(function(req, res) {
      Sprint.findById(req.body.sprintId, function(err, sprint) {
        var story = new Story({
          name: req.body.name,
          description: req.body.description
        });

        story.save(function(err, story) {
          if (err) {
            return res.send(500, err);
          }
        });

        sprint.stories.push(story);
        sprint.save(function(err, sprint) {
          if (err) return res.send({error: err});
          return res.send(story);
        });
      });
    });

// Specific tasks
router.route('/:id')
    // returns a particular task
    .get(function(req, res) {
      Story
          .findById(req.params.id)
          .populate('_creator')
          .populate('tasks')
          .exec(function(err, story) {
            if (err) {
              return res.send(500, {error: err});
            }

            return res.send(story);
          });
    })

    // update existing task
    .put(function(req, res) {
      var story = {
        name: req.body.name,
        description: req.body.description
      };

      var id = req.params.id;
      Story.update({ _id: id }, { $set: story }, function(err, story) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(story);
      });
    })

    .delete(function(req, res) {
      Story.findById(req.params.id).remove(function(err, story) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(story);
      });
    });


/**
 * Exporting router.
 */
module.exports = router;

