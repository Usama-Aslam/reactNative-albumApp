import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  textStyle: {
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center"
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
