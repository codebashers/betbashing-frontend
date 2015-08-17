import DS from 'ember-data';

export default DS.Model.extend({

  event_type: DS.attr('string'),

  event_minute: DS.attr('number'),

  event_team: DS.attr('string'),

  event_player: DS.attr('string'),

  event_result: DS.attr('string'),

  match: DS.belongsTo('match', {
    async: true
  })

});
