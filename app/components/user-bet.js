import Ember from 'ember';

export default Ember.Component.extend({

  attributeBindings: ['popup', 'data-title', 'data-content', 'data-variation'],

  execPopup: function() {
    alert('da');
  }.on('didInsertElement')

});
