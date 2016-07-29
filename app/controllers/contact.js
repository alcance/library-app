import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  // Form Validation: Email and message.
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isEmailValid', 'isMessageLongEnough'),

  actions: {
    sendMessage() {

      var email = this.get('emailAddress');
      var message = this.get('message');

      alert('Sending message');

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      console.log(responseMessage);
      this.set('responseMessage', responseMessage);

      //clear properties
      this.set('emailAddress', '');
      this.set('message', '');

    }
  }

});
