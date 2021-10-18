import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Constant } from "expo-constants";

const Header = () => {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: "skyblue",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 240,
      }}
    >
      <View
        style={{
          marginLeft: 10,
        }}
      >
        <Feather name="menu" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 100,
        }}
      >
        <Entypo name="location-pin" size={24} color="black" />
        <FontAwesome name="user" size={24} color="black" />
        <Ionicons name="ios-cart-sharp" size={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Header;
