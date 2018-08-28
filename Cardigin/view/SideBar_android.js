import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { Text, Container, List, ListItem, Content } from "native-base";
import { CDGColor } from "../common/constants/CDGColor";

import cardiginText from "../assets/images/cardiginText.png";
import cargigin_bk from "../assets/images/cargigin_bk.png";

export default class SideBar_android extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    var dataOfList = [
      {
        name: "Exibition",
        iconClass: Icon,
        icon: "blur",
        routes: "ExibitionView",
        color:
          this.props.screenProps.currentPage === "Exibition"
            ? CDGColor.Prime
            : CDGColor.LightGray
      },
      {
        name: "Community",
        iconClass: Icon,
        icon: "view-carousel",
        routes: "CommunityView",
        color:
          this.props.screenProps.currentPage === "Community"
            ? CDGColor.Prime
            : CDGColor.LightGray
      },
      {
        name: "Journal",
        iconClass: MIcon,
        icon: "person-pin",
        routes: "JournalView",
        color:
          this.props.screenProps.currentPage === "Journal"
            ? CDGColor.Prime
            : CDGColor.LightGray
      },
      {
        name: "Setting",
        iconClass: Icon,
        icon: "settings",
        routes: "SettingView",
        color:
          this.props.screenProps.currentPage === "Setting"
            ? CDGColor.Prime
            : CDGColor.LightGray
      }
    ];

    console.log(dataOfList);
    return (
      <Container>
        <Content>
          <Image
            source={cargigin_bk}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              resizeMode: "contain",
              height: 100,
              width: 180,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={cardiginText}
          />
          <List
            dataArray={dataOfList}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    this.props.navigation.navigate(data.routes);
                    this.props.screenProps.changePage(data.name);
                  }}
                >
                  <data.iconClass
                    size={30}
                    name={data.icon}
                    style={{
                      paddingRight: 16,
                      color: data.color
                    }}
                  />
                  <Text
                    style={{
                      color: data.color
                    }}
                  >
                    {data.name}
                  </Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
