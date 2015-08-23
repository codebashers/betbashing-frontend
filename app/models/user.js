import DS from 'ember-data';

export default DS.Model.extend({

  username: DS.attr('string'),

  points: DS.attr('number'),

  firstname: DS.attr('string'),

  lastname: DS.attr('string'),

  email: DS.attr('string'),
  
  bets: DS.hasMany('bet', {
    async: true
  })

});
