import React, { Component } from "react";
import CommunityViewBar from "./CommunityView/NavigatorBar";
import JournalViewBar from "./JournalView/NavigatorBar";
import SettingViewBar from "./SettingView/NavigatorBar";
import ExibitionViewBar from "./ExibitionView/NavigatorBar";

import SideBar_android from "./SideBar_android";

import { DrawerNavigator } from "react-navigation";
import { Alert } from "react-native";

createDrawerNavigator = require("react-navigation-drawer")
  .createDrawerNavigator;

const RootView_android = createDrawerNavigator(
  {
    ExibitionView: { screen: ExibitionViewBar },
    CommunityView: { screen: CommunityViewBar },
    JournalView: { screen: JournalViewBar },
    SettingView: { screen: SettingViewBar }
  },
  {
    contentComponent: props => <SideBar_android {...props} />
  }
);

export default RootView_android;
