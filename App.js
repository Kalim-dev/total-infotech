import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./main-tamplet/Footer";
import Home from "./Components/Home";
import Header from "./main-tamplet/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
  },
});
