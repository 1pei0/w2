import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Shawn Mendes's Albums </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#A7DDF4",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    marginBottom:20
  },
  textStyle: {
    fontSize: 20,
    marginTop:10,
    color:"#114F87",
  },

});

export default Header;