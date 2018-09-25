/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CDGColor } from './common/constants/CDGColor';
import RootView_ios from './view/RootView_ios';
import RootView_android from './view/RootView_android';
import LoginView from './view/LoginView/LoginView';
import SigninView from './view/SigninView/SigninView';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const RootView = Platform.select({
  ios: RootView_ios,
  android: RootView_android
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Exibition',
      Login: false
    };

    this.changePage = function(name) {
      this.setState({
        currentPage: name
      });
    };

    this.changePage.bind(this);
  }

  // change from this.state.Login to true to skip login
  render() {
    if (this.state.Login) {
      return (
        <StyleProvider style={getTheme(platform)}>
          <RootView
            screenProps={{
              currentPage: this.state.currentPage,
              changePage: name => this.changePage(name)
            }}
          />
        </StyleProvider>
      );
    } else {
      return (
        <StyleProvider style={getTheme(platform)}>
          <SigninView />
        </StyleProvider>
      );
    }
  }
}
