import StackNavigator from "./navigation/StackNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [isLoaded] = useFonts({
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-semibold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <StackNavigator />
    </>
  );
}
