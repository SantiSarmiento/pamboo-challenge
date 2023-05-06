import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { titulos } from "./src/helpers/Colors";


let persistor = persistStore(store)

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Montserrat-Light",
      },
      200: {
        normal: "Montserrat-Light",
      },
      300: {
        normal: "Montserrat-Light",
      },
      400: {
        normal: "Montserrat-Regular",
      },
      500: {
        normal: "Montserrat-Medium",
      },
      600: {
        normal: "Montserrat-Bold"
      },
    },
  },
  colors: {
    custom: {
      600: titulos,
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'custom',
      },
    }
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App