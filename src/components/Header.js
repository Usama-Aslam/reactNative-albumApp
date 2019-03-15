import React, { Component } from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.heading}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: "#FEFEFE",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: "relative"
  }
};

export default Header;
