import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('library');
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    }
  }

});
