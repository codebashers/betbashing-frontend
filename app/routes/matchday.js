import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('matchday', 1);
    // return Ember.$.getJSON('http://football-api.com/api/?Action=fixtures&APIKey=67303e2d-5622-b3e1-139f3f48303d&comp_id=1204&match_date=15.08.2015');
  }

});
