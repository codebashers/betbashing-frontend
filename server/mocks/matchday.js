module.exports = function(app) {
  var express = require('express');
  var matchdayRouter = express.Router();

  matchdayRouter.get('/', function(req, res) {
    res.send({
      'matchdays': [
        {
          "id": 1,
          "matches": [2008817]
        }
      ]
    });
  });

  matchdayRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  matchdayRouter.get('/:id', function(req, res) {
    res.send({
      'matchday': {
        "id": 1,
        "matches": [2008817]
      }
    });
  });

  matchdayRouter.put('/:id', function(req, res) {
    res.send({
      'matchday': {
        id: req.params.id
      }
    });
  });

  matchdayRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/matchdays', matchdayRouter);
};
