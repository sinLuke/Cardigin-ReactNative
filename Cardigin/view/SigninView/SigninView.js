import React, { Component } from 'react';

import { createStackNavigator, TouchableHighlight } from 'react-navigation';
import t from 'tcomb-form-native';
import { CDGColor } from '../../common/constants/CDGColor';

import signinName from './SigninName';
import signinEmail from './SigninEmail';

var Form = t.form.Form;

// here we are: define your domain model

export default createStackNavigator({
  Home: {
    screen: signinEmail
  }
});
