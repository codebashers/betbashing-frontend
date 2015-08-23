module.exports = function(app) {
  var express = require('express');
  var userRouter = express.Router();

  userRouter.get('/', function(req, res) {
    res.send({
      'users': [
        {
          "id": 1,
          "username": "Daemonde",
          "points": 35,
          "firstname": "Dennis",
          "lastname": "Mende",
          "email": "dmende@me.com",
          "bets": [2]
        },
        {
          "id": 2,
          "username": "Chrizzle",
          "points": 82,
          "firstname": "Christoph",
          "lastname": "Langhof",
          "email": "chrizzdf@gmail.com",
          "bets": [1]
        },
        {
          "id": 3,
          "username": "Bobby",
          "points": 21,
          "firstname": "Daniel",
          "lastname": "Tourg",
          "email": "danni@abc.com",
          "bets": [3]
        },
        {
          "id": 4,
          "username": "Tha Destroya",
          "points": 77,
          "firstname": "Danny",
          "lastname": "Trejo",
          "email": "trejo@gmail.com",
          "bets": [4]
        }
      ]
    });
  });

  userRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  userRouter.get('/:id', function(req, res) {
    res.send({
      'user': [
        {
          "id": 1,
          "username": "Daemonde",
          "points": 35,
          "firstname": "Dennis",
          "lastname": "Mende",
          "email": "dmende@me.com",
          "bets": [2]
        },
        {
          "id": 2,
          "username": "Chrizzle",
          "points": 82,
          "firstname": "Christoph",
          "lastname": "Langhof",
          "email": "chrizzdf@gmail.com",
          "bets": [1]
        },
        {
          "id": 3,
          "username": "Bobby",
          "points": 21,
          "firstname": "Daniel",
          "lastname": "Tourg",
          "email": "danni@abc.com",
          "bets": [3]
        },
        {
          "id": 4,
          "username": "Tha Destroya",
          "points": 77,
          "firstname": "Danny",
          "lastname": "Trejo",
          "email": "trejo@gmail.com",
          "bets": [4]
        }  
      ]
    });
  });

  userRouter.put('/:id', function(req, res) {
    res.send({
      'user': {
        id: req.params.id
      }
    });
  });

  userRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', userRouter);
};
