import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'a',

  classNames: ['item'],

  attributeBindings: ['data-tab'],

  didInsertElement: function () {

    Ember.$('.ui.menu .item').tab();

  }

});
