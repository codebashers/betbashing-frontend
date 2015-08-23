import DS from 'ember-data';

export default DS.Model.extend({

  bet_localteam_score: DS.attr('number'),

  bet_visitorteam_score: DS.attr('number'),

  bet_points: DS.attr('number'),

  match: DS.belongsTo('match', {
    async: true
  }),

  user: DS.belongsTo('user', {
    async: true
  })

});
