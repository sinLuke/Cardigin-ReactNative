import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import CommunityView from './CommunityView';
import ExibitionView from './ExibitionView';
import CameraView from './CameraView';
import JournalView from './JournalView';
import SettingView from './SettingView';
import { CDGColor } from '../common/constants/CDGColor';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  StyleProvider
} from 'native-base';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class RootView_ios extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>
                {this.state.page === 0 && 'Exibition'}
                {this.state.page === 1 && 'Community'}
                {this.state.page === 2 && 'Journal'}
                {this.state.page === 3 && 'Setting'}
              </Title>
            </Body>
            <Right />
          </Header>
          <Content>
            {this.state.page === 0 && <ExibitionView />}
            {this.state.page === 1 && <CommunityView />}
            {this.state.page === 2 && <JournalView />}
            {this.state.page === 3 && <SettingView />}
          </Content>
          <Footer>
            <FooterTab initialPage={0} page={this.state.page}>
              <Button
                vertical
                active={this.state.page === 0}
                onPress={() => this.setState({ page: 0 })}
              >
                <Icon name="ios-aperture" />
                <Text style={{ fontSize: 10 }}>Exibition</Text>
              </Button>
              <Button
                vertical
                active={this.state.page === 1}
                onPress={() => this.setState({ page: 1 })}
              >
                <Icon name="ios-albums" />
                <Text>Community</Text>
              </Button>
              <Button
                vertical
                active={this.state.page === 2}
                onPress={() => this.setState({ page: 2 })}
              >
                <Icon name="ios-contact" />
                <Text>Journal</Text>
              </Button>
              <Button
                vertical
                active={this.state.page === 3}
                onPress={() => this.setState({ page: 3 })}
              >
                <Icon name="ios-settings" />
                <Text>Setting</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}
