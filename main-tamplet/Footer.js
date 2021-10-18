import * as React from "react";
import { BottomNavigation, Text, Veiw } from "react-native-paper";
import Home from "../Components/Home";

const HomeRoute = () => <Text>This is Home page</Text>;

const OffersRoute = () => <Text>This is Offers page</Text>;

// const InvoicesRoute = Home;
const StoresRoute = () => <Text>This is Stores page</Text>;
const InfoRoute = () => <Text>This is Information page</Text>;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Home", title: "Home", icon: "album" },
    { key: "Offers", title: "Offers", icon: "album" },
    { key: "Invoices", title: "Invoices", icon: "album" },
    { key: "Stores", title: "Stores", icon: "album" },
    { key: "Info", title: "Info", icon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Offers: OffersRoute,
    Invoices: Home,
    Stores: StoresRoute,
    Info: InfoRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
export default Footer;
