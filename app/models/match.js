import DS from 'ember-data';

export default DS.Model.extend({

  match_comp: DS.attr('number'),

  match_date: DS.attr('string'),

  match_formatted_date: DS.attr('string'),

  match_status: DS.attr('string'),

  match_timer: DS.attr('string'),

  match_time: DS.attr('string'),

  match_localteam: DS.attr('number'),

  match_localteam_name: DS.attr('string'),

  match_localteam_score: DS.attr('number'),

  match_visitorteam: DS.attr('number'),

  match_visitorteam_name: DS.attr('string'),

  match_visitorteam_score: DS.attr('number'),

  events: DS.hasMany('event', {
    async: true
  }),

  matchday: DS.belongsTo('matchday', {
    async: true
  })

});
