module.exports = function(app) {
  var express = require('express');
  var betRouter = express.Router();

  betRouter.get('/', function(req, res) {
    res.send({
      'bets': [
        {
          "id": 1,
          "match": 2008817,
          "bet_localteam_score": 0,
          "bet_visitorteam_score": 3,
          "bet_points": 3,
          "user": 2
        },
        {
          "id": 2,
          "match": 2008817,
          "bet_localteam_score": 1,
          "bet_visitorteam_score": 1,
          "bet_points": 0,
          "user": 1
        },
        {
          "id": 3,
          "match": 2008817,
          "bet_localteam_score": 2,
          "bet_visitorteam_score": 1,
          "bet_points": 0,
          "user": 3
        },
        {
          "id": 4,
          "match": 2008817,
          "bet_localteam_score": 0,
          "bet_visitorteam_score": 2,
          "bet_points": 1,
          "user": 4
        }
      ]
    });
  });

  betRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  betRouter.get('/:id', function(req, res) {
    res.send({
      'bet': [
        {
          "id": 1,
          "match": 2008817,
          "bet_localteam_score": 0,
          "bet_visitorteam_score": 3,
          "bet_points": 3,
          "user": 2
        },
        {
          "id": 2,
          "match": 2008817,
          "bet_localteam_score": 1,
          "bet_visitorteam_score": 1,
          "bet_points": 0,
          "user": 1
        },
        {
          "id": 3,
          "match": 2008817,
          "bet_localteam_score": 2,
          "bet_visitorteam_score": 1,
          "bet_points": 0,
          "user": 3
        },
        {
          "id": 4,
          "match": 2008817,
          "bet_localteam_score": 0,
          "bet_visitorteam_score": 2,
          "bet_points": 1,
          "user": 4
        }
      ]
    });
  });

  betRouter.put('/:id', function(req, res) {
    res.send({
      'bet': {
        id: req.params.id
      }
    });
  });

  betRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/bets', betRouter);
};
