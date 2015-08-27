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
  }),

  bet_state: function () {
    var state;
    if (this.get('bet_localteam_score') === this.get('match.match_localteam_score') && this.get('bet_visitorteam_score') === this.get('match.match_visitorteam_score')) {
      state = 'hit';
    }
    else if(
        (this.get('bet_localteam_score') < this.get('bet_visitorteam_score') && this.get('match.match_localteam_score') < this.get('match.match_visitorteam_score')) ||
        (this.get('bet_localteam_score') > this.get('bet_visitorteam_score') && this.get('match.match_localteam_score') > this.get('match.match_visitorteam_score')) ||
        (this.get('bet_localteam_score') === this.get('bet_visitorteam_score') && this.get('match.match_localteam_score') === this.get('match.match_visitorteam_score'))
      ) {
      state = 'tendency';
    } else {
      state = 'fail';
    }
    return state;
  }.property('bet_localteam_score', 'bet_visitorteam_score', 'match.match_localteam_score', 'match.match_visitorteam_score')

});
