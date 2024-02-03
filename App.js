import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomStack, BottomTab } from './app/routes/BottomTab';
import 'react-native-gesture-handler';
import { store } from './app/redux/Store';
import { Provider } from 'react-redux';

import CategoryimgCard from './app/component/CategoryimgCard';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <BottomTab />
          {/* <CategoryimgCard/> */}
        </NavigationContainer>
      </Provider>
    )
  }
}