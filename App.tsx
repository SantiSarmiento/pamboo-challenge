import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { naranja_oscuro } from "./src/helpers/Colors";
import { request, PERMISSIONS } from "react-native-permissions";

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
      600: naranja_oscuro,
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

  //Obtenemos permisos para acceder a la geoposicion
  React.useEffect(() => {
    permisos()
  }, [])

  async function permisos() {
    var response2 = await request(PERMISSIONS.ANDROID.CAMERA)
    var response5 = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  }
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