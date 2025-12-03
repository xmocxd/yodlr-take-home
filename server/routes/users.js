import express from 'express';
import _ from 'lodash';

import usersData from '../../init_data.json' with { type: 'json' };

let users = usersData.data;

const router = express.Router();

var curId = _.size(users);

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(_.toArray(users));
});

/* Create a new user */
router.post('/', function(req, res) {
  console.log('Creating user:', req.body);

  var user = req.body;
  user.id = curId++;
  if (!user.state) {
    user.state = 'pending';
  }
  users[user.id] = user;
  res.json(user);
});

/* Get a specific user by id */
router.get('/:id', function(req, res, next) {
  var user = users[req.params.id];
  if (!user) {
    return next();
  }
  res.json(users[req.params.id]);
});

/* Delete a user by id */
router.delete('/:id', function(req, res) {
  var user = users[req.params.id];
  delete users[req.params.id];
  res.status(204);
  res.json(user);
});

/* Update a user by id */
router.put('/:id', function(req, res, next) {
  var user = req.body;
  console.log('Updating user:', req.body);
  console.log('Param id:', req.params.id);
  console.log('Body id:', user.id);
  
  if (user.id != req.params.id) {
    return next(new Error('ID paramter does not match body'));
  }
  users[user.id] = user;
  res.json(user);
});

export default router;