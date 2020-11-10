import React from "react";
import { StyleSheet, Text } from "react-native";

export default function BodyText({ children }) {
  return <Text style={styles.body}>{children}</Text>;
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
});
