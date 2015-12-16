// defines the database schemes
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  projects: [{type: ObjectId, ref: 'Project'}]
});

var projectSchema = new mongoose.Schema({
  _creator: { type: ObjectId, ref: 'User' },
  name: {type: String, required: true},
  description: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  sprints: [{type: ObjectId, ref: 'Sprint'}],
  users: [{type: ObjectId, ref: 'User'}],
  admin: {type: ObjectId, ref: 'User'}
});

var sprintSchema = new mongoose.Schema({
  _creator: { type: ObjectId, ref: 'Project' },
  name: {type: String, required: true},
  description: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  stories: [{type: ObjectId, ref: 'Story'}]
});

var storySchema = new mongoose.Schema({
  _creator: { type: ObjectId, ref: 'Sprint' },
  name: {type: String, required: true},
  description: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  tasks: [{ type: ObjectId, ref: 'Task' }]
});

var taskSchema = new mongoose.Schema({
  _creator: { type: ObjectId, ref: 'Story' },
  name: {type: String, required: true},
  description: {type: String, required: true},
  created_at: {type: Date, default: Date.now}
});

// declare models
mongoose.model('User', userSchema);
mongoose.model('Project', projectSchema);
mongoose.model('Sprint', sprintSchema);
mongoose.model('Story', storySchema);
mongoose.model('Task', taskSchema);
