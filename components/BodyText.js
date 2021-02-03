import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  return <Text style={styles.body}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 20,
  },
});

export default BodyText;
