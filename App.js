import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./main-tamplet/Footer";
import Home from "./Components/Home";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there! working on Total app..</Text>
      <Home />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "20%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Footer: {
    backgroundColor: `#fff`,
  },
});
