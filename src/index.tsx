import React, { useEffect, useState } from 'react';
import * as Updates from "expo-updates";
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { NativeRouter } from "react-router-native";

import { IReducers } from './interfaces';

import Header from './components/header';
import Navbar from './components/navbar';
import MenuModal from './components/menu';
import UpdateModal from './components/updateModal';

import Routes from './routes';

const Index = () => {

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const isAuthenticated = useSelector((state: IReducers) => state.authReducers.isAuthenticated);
  const menuIsOpen = useSelector((state: IReducers) => state.menuReducers.isOpen);
  const [hasUpdate, setHasUpdate] = useState(false);

  const getStatusbarColor = () => {
    return theme?.title === 'light' ? 'dark' : 'light';
  }

  // useEffect(() => {
  //   const updateApp = async () => {
  //     const { isAvailable } = await Updates.checkForUpdateAsync();
  //     if (isAvailable) {
  //       setHasUpdate(true);
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //       setHasUpdate(false);
  //     }
  //   }
  //   updateApp();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <NativeRouter>
        <StatusBar style={getStatusbarColor()} />
        {isAuthenticated && <Header />}
        <Routes />
        {!hasUpdate && !menuIsOpen && isAuthenticated && <Navbar />}
        {menuIsOpen && <MenuModal />}
        {hasUpdate && <UpdateModal />}
      </NativeRouter>
    </ThemeProvider>
  );
}

export default Index;