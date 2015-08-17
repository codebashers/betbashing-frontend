module.exports = function(app) {
  var express = require('express');
  var matchRouter = express.Router();

  matchRouter.get('/', function(req, res) {
    res.send({
      'matches': [
        {
          "id": 2008817,
          "matchday": 1,
          "match_comp": 1204,
          "match_date": "Aug 15",
          "match_formatted_date": "15.08.2015",
          "match_status": "FT",
          "match_timer": "",
          "match_time": "11:45",
          "match_localteam": 9363,
          "match_localteam_name": "Southampton",
          "match_localteam_score": 0,
          "match_visitorteam": 9158,
          "match_visitorteam_name": "Everton",
          "match_visitorteam_score": 3,
          "events": [
            20088171,
            20088172,
            20088173,
            20088174,
            20088175,
            20088176,
            20088177,
            20088178,
            20088179
          ]
        }
      ]
    });
  });

  matchRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  matchRouter.get('/:id', function(req, res) {
    res.send({
      'match': {
        "id": 2008817,
        "matchday": 1,
        "match_comp": 1204,
        "match_date": "Aug 15",
        "match_formatted_date": "15.08.2015",
        "match_status": "FT",
        "match_timer": "",
        "match_time": "11:45",
        "match_localteam": 9363,
        "match_localteam_name": "Southampton",
        "match_localteam_score": 0,
        "match_visitorteam": 9158,
        "match_visitorteam_name": "Everton",
        "match_visitorteam_score": 3,
        "events": [
          20088171,
          20088172,
          20088173,
          20088174,
          20088175,
          20088176,
          20088177,
          20088178,
          20088179
        ]
      }
    });
  });

  matchRouter.put('/:id', function(req, res) {
    res.send({
      'match': {
        id: req.params.id
      }
    });
  });

  matchRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/matches', matchRouter);
};
