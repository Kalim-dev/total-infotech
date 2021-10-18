import React from "react";
import { Dimensions, Platform } from "react-native";
import { WebView } from "react-native-webview";

const Home = () => {
  return Platform.OS === "web" ? (
    <iframe src="https://sofit.ltd" height={400} width={300} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://sofit.ltd", baseUrl: "" }}
        style={{ flex: 1, height: 2 }}
      />
    </View>
  );
};
export default Home;
