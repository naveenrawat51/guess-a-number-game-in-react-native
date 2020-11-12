import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import Colors from "../constants/colors";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text
        style={{
          ...styles.headerTitle,
          ...Platform.select({
            ios: styles.iosHeader,
            android: styles.androidHeader,
          }),
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "green",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "red" : "white",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? "white" : "black",
    fontFamily: "open-sans-bold",
  },
  iosHeader: {
    fontSize: 18,
  },
  androidHeader: {
    fontSize: 25,
  },
});
