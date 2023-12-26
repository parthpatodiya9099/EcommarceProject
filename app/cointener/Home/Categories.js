import { View, Text, ScrollView  } from 'react-native'
import React, { version } from 'react'
import AppButton from '../../component/Button/AppButton'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'
import CategoriesName from '../../component/CategoriesName'

export default function Categories({navigation}) {
  return (
    <ScrollView>
        <View style={{marginTop:verticalScale(20)}}>
          <AppButton 
          titel="VIEW ALL ITEMS"
          />
        </View>
        <Text style={{marginLeft:horizontalScale(20),marginTop:verticalScale(10)}}>Choose category</Text>
        <View style={{marginTop:verticalScale(30)}}>
          <CategoriesName 
            CategoriName="Topes"
            onPress={()=>navigation.navigate('ProductList')}
          />
          <CategoriesName 
            CategoriName="Shirts & Blouses"
          />
          <CategoriesName 
            CategoriName="Cardigans & Sweaters"
          />
          <CategoriesName 
            CategoriName="Knitwear"
          />
          <CategoriesName 
            CategoriName="Blazers"
          />
          <CategoriesName 
            CategoriName="Outerwear"
          />
          <CategoriesName 
            CategoriName="Pants"
          />
          <CategoriesName 
            CategoriName="Jeans"
          />
          <CategoriesName 
            CategoriName="Shorts"
          />
          <CategoriesName 
            CategoriName="Skirts"
          />
          <CategoriesName 
            CategoriName="Dresses"
          />
          <CategoriesName 
            CategoriName="Night-Dress"
          />
        </View>
    </ScrollView>
  )
}