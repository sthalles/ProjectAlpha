/**
 * This document defines the API for Tasks.
 * It responds to requests under /tasks
 */
var express = require('express');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var Story = mongoose.model('Story');

router.route('/')
    // get all tasks
    .get(function(req, res) {
      Task.find(function(err, task) {
        if (err) {
          return res.send(500, {error: 'Error in post task' });
        }
        return res.send(task);
      });
    })

    // store a new task
    .post(function(req, res) {
      Story.findById(req.body.storyId, function(err, story) {
        if (err) return res.send({error: err});

        var task = new Task();
        task.name = req.body.name;
        task.description = req.body.description;
        task._creator = story._id;

        task.save(function(err, task) {
          if (err) {
            return res.send(500, err);
          }
        });
        story.tasks.push(task);
        story.save(function(err, story) {
          if (err) return res.send({error: err});

          return res.send(task);
        });
      });
    });

// Specific tasks
router.route('/:id')
    // returns a particular task
    .get(function(req, res) {
      Task
          .findById(req.params.id)
          .populate('_creator')
          .exec(function(err, task) {
            if (err) {
              return res.send(500, {error: err});
            }

            return res.send(task);
          });
    })

    // update existing task
    .put(function(req, res) {
      var task = {
        name: req.body.name,
        description: req.body.description
      };

      Task.update({ _id: req.params.id }, { $set: task }, function(err, task) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(task);
      });
    })

    .delete(function(req, res) {
      Task.findById(req.params.id).remove(function(err, task) {
        if (err) {
          return res.send(500, {error: err});
        }

        return res.send(task);
      });
    });


/**
 * Exporting router.
 */
module.exports = router;

