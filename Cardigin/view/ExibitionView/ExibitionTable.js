import React from "react";
import {
  StyleSheet,
  Animated,
  ListView,
  Platform,
  Dimensions
} from "react-native";

import PostContainerCell from "../Shared/Posts/PostContainerCell";
import posts from "../../fakeData/posts";

const AnimatedListView = Animated.createAnimatedComponent(ListView);

const platform = Platform.OS;
const windowHeight = Dimensions.get("window").height;

//Collapsible Navbar
const navbarHeight = platform === "ios" ? (windowHeight === 812 ? 88 : 64) : 50;

export default class ExibitionTable extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(posts)
    };
  }

  renderItem = (rowData, sectionId, rowId) => {
    return (
      <PostContainerCell
        rowData={rowData}
        rowId={rowId}
        sectionId={sectionId}
      />
    );
  };
  render() {
    console.log(this.props);
    return (
      <AnimatedListView
        contentContainerStyle={styles.contentContainer}
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        scrollEventThrottle={1}
        onMomentumScrollBegin={this.props.onMomentumScrollBegin}
        onMomentumScrollEnd={this.props.onMomentumScrollEnd}
        onScrollEndDrag={() => {
          this.props.onScrollEndDrag();
        }}
        onScroll={this.props.onScroll}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: navbarHeight
  }
});
