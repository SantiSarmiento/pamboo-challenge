import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}

export default App