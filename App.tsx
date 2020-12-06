import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Index from './src';

import { store, persistor } from './src/store';

export default function App() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Atenção!", "Tem certeza que deseja sair do aplicativo?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}
