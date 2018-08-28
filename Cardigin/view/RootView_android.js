import React, { Component } from "react";
import CommunityViewBar from "./CommunityView/NavigatorBar";
import JournalViewBar from "./JournalView/NavigatorBar";
import SettingViewBar from "./SettingView/NavigatorBar";
import ExibitionView from "./ExibitionView/ExibitionView";

import CameraView from "./CameraView/NavigatorBar";

import SideBar_android from "./SideBar_android";

import { DrawerNavigator } from "react-navigation";
import { Alert } from "react-native";

const RootView_android = DrawerNavigator(
  {
    ExibitionView: { screen: ExibitionView },
    CommunityView: { screen: CommunityViewBar },
    JournalView: { screen: JournalViewBar },
    SettingView: { screen: SettingViewBar },
    CameraView: { screen: CameraView }
  },
  {
    contentComponent: props => <SideBar_android {...props} />
  }
);

export default RootView_android;
