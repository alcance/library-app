import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  isDisabled: true,

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the following address in progress:
        ${this.get('emailAddress')}`);

      this.set('responseMessage', `Thank you! We have just saved your email
        address: ${this.get('emailAddress')}`);

      this.set('emailAddress', '');
    }
  }

});
