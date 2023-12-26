import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ProductStack } from './app/routes/StackNevigation'
import { BottomStack, BottomTab } from './app/routes/BottomTab';
import 'react-native-gesture-handler';
import { DrawerNevigation } from './app/routes/DrawerNevigation';
import ProductDetails from './app/cointener/Home/ProductDetails';
import Product from './app/cointener/Home/Product';
import FavouriteCard from './app/component/Card/FavouriteCard';
import AppButton from './app/component/Button/AppButton';
import AppInput from './app/component/InputBox/AppInput';
import Address from './app/cointener/Cart/Address';
import Payment from './app/cointener/Cart/Payment';
import LikeCard from './app/component/Card/LikeCard';
import SignUp from './app/cointener/SignUp';
import Login from './app/cointener/Login';
import Password from './app/cointener/Password';
import Profileinput from './app/component/Profileinput';
import MyOrder from './app/cointener/Profile/MyOrder';
import Orderinput from './app/component/Orderinput';
import Brandtick from './app/component/Brandtick';
import Categories from './app/component/CategoriesName';
import CategariCard from './app/component/Card/CategariCard';
import ProductCard from './app/component/ProductCard';

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
         {/* <ProductStack /> */}
         <BottomTab />
         {/* <ProductCard /> */}
         {/* <Orderinput /> */}
         {/* <AppButton /> */}
         {/* <AppInput /> */}
         {/* <Address /> */}
         {/* <Payment /> */}
         {/* <LikeCard /> */}
         {/* <SignUp /> */}
         {/* <Login/> */}
         {/* <Password /> */}
         {/* <Profileinput /> */}
         {/* <MyOrder/> */}
         {/* <Product /> */}
         {/* <Brandtick /> */}
         {/* <CategoriesName/> */}
         {/* <CategariCard /> */}
        </NavigationContainer>
    )
  }
}