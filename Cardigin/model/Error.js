import { Alert } from 'react-native';
module.exports = {
  showAlert_withTitleAndMessage: function(title, message) {
    Alert.alert(title, message);
  },
  showAlert_withMessage: function(message) {
    Alert.alert('Unknown Error', message);
  },
  showAlert_withError: function(error) {
    Alert.alert(error.message, error.stack);
  },
  showAlert_withTitleAndError: function(title, error) {
    Alert.alert(title, error.message);
  },
  showAlert: function() {
    Alert.alert('Unknown Error', 'Please Try Again');
  }
};
