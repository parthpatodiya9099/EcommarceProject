import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FavouriteCard from '../../component/Card/FavouriteCard'

export default function Favourate({ navigation }) {
  return (
    <ScrollView>
      <FavouriteCard
        img={require('../../../assets/images/front-view-smiley-woman-pointing-herself.jpg')}
        color="White"
        Product="T-Shirt"
        price="$15"
        size='M'
        onPress={() => navigation.navigate('Bag')}
      />
      <FavouriteCard
        img={require('../../../assets/images/beautiful-smiling-brunette-girl-pointing-fingers-your-logo-showing-something-center.jpg')}
        color="White"
        Product="T-Shirt"
        price="$12"
        size='L'
        onPress={() => navigation.navigate('Bag')}
      />
      <FavouriteCard
        img={require('../../../assets/images/beautiful-young-woman-dress-walking-isolated-white-background.jpg')}
        color="Blue"
        Product="Dress"
        price="$18"
        size='XL'
        onPress={() => navigation.navigate('Bag')}
      />
      <FavouriteCard
        img={require('../../../assets/images/front-view-smart-man-holding-his-glasses.jpg')}
        color="SkyBlue"
        Product="Koti"
        price="$8"
        size='XXL'
        onPress={() => navigation.navigate('Bag')}
      />
      <FavouriteCard
        img={require('../../../assets/images/man-gray-pajamas-comfy-sleepwear-apparel-full-body.jpg')}
        color="black"
        Product="Shirt"
        price="$16"
        size='S'
        onPress={() => navigation.navigate('Bag')}
      />
      <FavouriteCard
        img={require('../../../assets/images/man-gray-pajamas-comfy-sleepwear-apparel-full-body.jpg')}
        color="black"
        Product="Shirt"
        price="$16"
        size='S'
        onPress={() => navigation.navigate('Bag')}
      />
    </ScrollView>
  )
}