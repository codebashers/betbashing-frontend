module.exports = function(app) {
  var express = require('express');
  var eventRouter = express.Router();

  eventRouter.get('/', function(req, res) {
    res.send({
      'events': [
        {
          "id": 20088171,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "6",
          "event_team": "localteam",
          "event_player": "M. Targett",
          "event_result": ""
        },
        {
          "id": 20088172,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "22",
          "event_team": "visitorteam",
          "event_player": "R. Lukaku",
          "event_result": "[0 - 1]"
        },
        {
          "id": 20088173,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "38",
          "event_team": "localteam",
          "event_player": "G. Pelle",
          "event_result": ""
        },
        {
          "id": 20088174,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "45",
          "event_team": "visitorteam",
          "event_player": "R. Lukaku",
          "event_result": "[0 - 2]"
        },
        {
          "id": 20088175,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "45",
          "event_team": "visitorteam",
          "event_player": "R. Barkley",
          "event_result": ""
        },
        {
          "id": 20088176,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "49",
          "event_team": "localteam",
          "event_player": "O. Romeu",
          "event_result": ""
        },
        {
          "id": 20088177,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "75",
          "event_team": "visitorteam",
          "event_player": "J. McCarthy",
          "event_result": ""
        },
        {
          "id": 20088178,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "77",
          "event_team": "localteam",
          "event_player": "K. Davis",
          "event_result": ""
        },
        {
          "id": 20088179,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "84",
          "event_team": "visitorteam",
          "event_player": "R. Barkley",
          "event_result": "[0 - 3]"
        }
      ]
    });
  });

  eventRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  eventRouter.get('/:id', function(req, res) {
    res.send({
      'event': [
        {
          "id": 20088171,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "6",
          "event_team": "localteam",
          "event_player": "M. Targett",
          "event_result": ""
        },
        {
          "id": 20088172,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "22",
          "event_team": "visitorteam",
          "event_player": "R. Lukaku",
          "event_result": "[0 - 1]"
        },
        {
          "id": 20088173,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "38",
          "event_team": "localteam",
          "event_player": "G. Pelle",
          "event_result": ""
        },
        {
          "id": 20088174,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "45",
          "event_team": "visitorteam",
          "event_player": "R. Lukaku",
          "event_result": "[0 - 2]"
        },
        {
          "id": 20088175,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "45",
          "event_team": "visitorteam",
          "event_player": "R. Barkley",
          "event_result": ""
        },
        {
          "id": 20088176,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "49",
          "event_team": "localteam",
          "event_player": "O. Romeu",
          "event_result": ""
        },
        {
          "id": 20088177,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "75",
          "event_team": "visitorteam",
          "event_player": "J. McCarthy",
          "event_result": ""
        },
        {
          "id": 20088178,
          "match": 2008817,
          "event_type": "yellowcard",
          "event_minute": "77",
          "event_team": "localteam",
          "event_player": "K. Davis",
          "event_result": ""
        },
        {
          "id": 20088179,
          "match": 2008817,
          "event_type": "goal",
          "event_minute": "84",
          "event_team": "visitorteam",
          "event_player": "R. Barkley",
          "event_result": "[0 - 3]"
        }
      ]
    });
  });

  eventRouter.put('/:id', function(req, res) {
    res.send({
      'event': {
        id: req.params.id
      }
    });
  });

  eventRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventRouter);
};
