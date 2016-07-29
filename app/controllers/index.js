import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  responseMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      // get emailAddress value
      const email = this.get('emailAddress');

      // Create invitation record
      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      // Save record Promise
      newInvitation.save().then((response) => {
        // Set response message
        this.set('responseMessage', `Thank you! We have just saved your email
          address with the following id: ${response.get('id')}`);

        // Clear emailAddress prop
        this.set('emailAddress', '');
      });
    }
  }

});
