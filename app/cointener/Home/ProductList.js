import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LikeCard from '../../component/Card/LikeCard';
import Card from '../../component/Card/Card';
import CategariCard from '../../component/Card/CategariCard';
import AppButton from '../../component/Button/AppButton';
import ProductCard from '../../component/ProductCard';


export default function ProductList({ navigation }) {
  const [model, Setmodel] = useState(false)
  const handlepress = () => {
    Setmodel(true)
  }
  const handleclose = () => {
    Setmodel(false)
  }
  return (
    <View>

      <View style={{ width: '100%', height: verticalScale(50), flexDirection: 'row', padding: 5 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={{ width: horizontalScale(110), height: verticalScale(35), backgroundColor: 'black', borderRadius: moderateScale(20), marginLeft: horizontalScale(10) }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>T-shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(110), height: verticalScale(35), backgroundColor: 'black', borderRadius: moderateScale(20), marginLeft: horizontalScale(10) }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>Crop-tops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(110), height: verticalScale(35), backgroundColor: 'black', borderRadius: moderateScale(20), marginLeft: horizontalScale(10) }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>Blouses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: horizontalScale(110), height: verticalScale(35), backgroundColor: 'black', borderRadius: moderateScale(20), marginLeft: horizontalScale(10) }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>Shirts</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>
      <View style={{ width: '100%', height: verticalScale(35), flexDirection: 'row', padding: 5, }}>
        <TouchableOpacity style={{ marginLeft: horizontalScale(15) }} onPress={() => (navigation.navigate('Filter'))}>
          <Feather name='filter' color='black' size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (navigation.navigate('Filter'))}>
          <Text style={{ fontSize: moderateScale(18), marginLeft: verticalScale(7), marginTop: verticalScale(2) }}>Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: horizontalScale(40), }} onPress={() => handlepress()}>
          <AntDesign name='swap' color='black' size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlepress()}>
          <Text style={{ fontSize: moderateScale(18), marginLeft: verticalScale(7), marginTop: verticalScale(2) }}>Price:Lower To high</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: horizontalScale(50) }}>
          <Feather name='list' color='black' size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={{width:'90%',marginLeft:horizontalScale(20), flexDirection: 'row' }}>
          <Card 
            imguri={require('../../../assets/images/tired-girl-heels.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'20$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          <Card 
            imguri={require('../../../assets/images/beautiful-young-woman-dress-walking-isolated-white-background.jpg')}
            title="Women Product"
            mainTitle='Night Dress'
            Dollar={'50$'}
            discount='-10%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />          
      </View>
      <View style={{ width:'90%',marginLeft:horizontalScale(20),flexDirection: 'row' }}>
          <Card 
            imguri={require('../../../assets/images/front-view-smiley-woman-pointing-herself.jpg')}
            title="Women Product"
            mainTitle='White T-Shit'
            Dollar={'26$'}
            discount='-5%'
            disColor='black'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          <Card 
            imguri={require('../../../assets/images/perky-girl-stylish-handbag.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'20$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />          
      </View>
      <View style={{ width:'90%',marginLeft:horizontalScale(20),flexDirection: 'row' }}>
          <Card 
            imguri={require('../../../assets/images/young-woman-with-sunglasses-black-t-shirt-using-headphones.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'20$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          <Card 
            imguri={require('../../../assets/images/beautiful-fashion-woman-violet-long-dress-hairstyle-with-pigtails-design-poses-studio.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'20$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />          
      </View>

      </ScrollView>
      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={model}
        >
          <View style={style.modlestyle}>
            <TouchableOpacity style={{ width: horizontalScale(90), height: verticalScale(7), backgroundColor: 'gray', marginLeft: horizontalScale(140) }} onPress={() => handleclose()}>
              <Feather name='minus' color={'black'} size={moderateScale(40)} />
            </TouchableOpacity>
            <Text style={{ fontSize: moderateScale(20), color: 'black', marginLeft: horizontalScale(157), marginTop: verticalScale(15) }}>Sort by</Text>

            <View style={{ width: '100%', height: '100%', marginTop: verticalScale(30), }}>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
                <Text style={{fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black', }}>Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55),borderWidth:0.5 }}>
                <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Newest</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55),borderWidth:0.5 }}>
                <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Customer review</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55), backgroundColor: '#DB3022' ,borderWidth:0.5}}>
                <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Price: lowest to high</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55) ,borderWidth:0.5}}>
                <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Price: highest to low</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
      </View>

    </View>
  )
}
const style = StyleSheet.create({
  modlestyle: {
    width: '100%',
    height: verticalScale(450),
    backgroundColor: 'white',
    borderRadius: moderateScale(40),
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 9,
    marginTop: verticalScale(400)
  },
})