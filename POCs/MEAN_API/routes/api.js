var express = require('express'); // pulls in express module
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('Task');

router.route('/tasks')
	// return all the tasks in the database
	.get(function(req, res) {
		Task.find(function(err, data){
			if(err) {
				return res.send(500, {message: "Error in post task" });
			}

			return res.send(data);
		});
	})

	// store a new task
	.post(function(req, res){
		var task = new Task();
		task.name = req.body.name;
		task.description = req.body.description;
		task.save(function(err, task) {
			if (err) {
				return res.send(500, err);
			}
			return res.json(task);
		})
	});

// manage specific tasks
router.route('/tasks/:id')
	// returns a particular task
	.get(function(req, res) {
		
		res.send({messsage: "TODO: return task with ID: " + req.params.id});
	})

	// update existing task
	.put(function(req, res) {
		res.send({message: "TODO: update the task ID: " + req.params.id});
	})

	.delete(function(req, res) {
		res.send({message: "TODO: delete the task ID: " + req.params.id});
	});

module.exports = router;