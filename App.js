import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomStack, BottomTab } from './app/routes/BottomTab';
import 'react-native-gesture-handler';
import { persistor, store } from './app/redux/Store';
import { Provider } from 'react-redux';

import CategoryimgCard from './app/component/CategoryimgCard';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <BottomTab />
            {/* <CategoryimgCard/> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}