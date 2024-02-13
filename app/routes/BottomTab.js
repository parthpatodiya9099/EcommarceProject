import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductStack } from './StackNevigation';
import MyBag from '../cointener/Cart/MyBag';
import Favourate from '../cointener/Favourate/Favourate';
import MyProfile from '../cointener/Profile/MyProfile';
import Product from '../cointener/Home/Product';
import ProductList from '../cointener/Home/ProductList';
import Feather from 'react-native-vector-icons/Feather';
import SignUp from '../cointener/SignUp';

const Tab = createBottomTabNavigator();
export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        headerTitleAlign: 'center',
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Shop') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Bag') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Favourate') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }


          return (
            <Feather name={iconName} color={color} size={25} />
          )

        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={ProductStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Shop" component={ProductList} />
      <Tab.Screen name="Bag" component={MyBag} />
      <Tab.Screen name="Favourate" component={Favourate} />
      <Tab.Screen name="Profile" component={SignUp} options={{
        headerShown: false,
      }} />

    </Tab.Navigator>
  )
}