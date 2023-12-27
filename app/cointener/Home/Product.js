import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import Card from '../../component/Card/Card'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'


export default function Product({navigation}) {
  return (
    <View style={style.containor}>
      <ScrollView>
        <View style={{width:'100%',height:verticalScale(500)}}>
        <Image         
          source={require('../../../assets/images/Image.png')}
          style={{ width:'100%',height:'100%'}}
        />
        </View>

        <View style={{ position: 'absolute',padding:10 }}>
          <Text style={{ color: 'white', marginTop: verticalScale(310), fontSize: moderateScale(50) }}>Fashion</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(50) }}>Sale</Text>
          <Pressable
            style={{ backgroundColor: '#DB3022', padding: 10, borderRadius: 20, marginTop: verticalScale(20) }}
            onPress={() => { }}>
            <Text style={{ color: 'white', textAlign: 'center', }}>Check</Text>
          </Pressable>
        </View>

        <View style={{ position: 'relative', marginTop: verticalScale(12) }}>
          <Text style={style.text}>New</Text>
          <Text style={style.subhead}>You’ve never seen it before!</Text>
          <Text style={{ position: 'absolute', color: 'black', marginLeft: horizontalScale(300), marginTop: verticalScale(35) }}>View all</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >

          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
          <Card
            imguri={require('../../../assets/images/tired-girl-heels.jpg')}
            title="Dorothy Perkins"
            mainTitle='Evening Dreese'
            Dollar={'12$'}
            discount='NEW'
            disColor='black'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
          <Card
            imguri={require('../../../assets/images/man-gray-pajamas-comfy-sleepwear-apparel-full-body.jpg')}
            title="Sitlly"
            mainTitle='Denim Jacket'
            Dollar={'19$'}
            discount='NEW'
            disColor='black'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
          <Card
            imguri={require('../../../assets/images/perky-girl-stylish-handbag.jpg')}
            title="Dorothy Perkins"
            mainTitle='Evening Dreese'
            Dollar={'20$'}
            discount='NEW'
            disColor='black'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>
        </ScrollView>

        <View style={{ flex: 1, marginTop: verticalScale(30) }}>
          <Text style={style.text}>Sale</Text>
          <Text style={style.subhead}>Super Summer Sale</Text>
          <Text style={{ position: 'absolute', color: 'black', marginLeft: horizontalScale(300), marginTop: verticalScale(35) }}>View all</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
          <Card
            imguri={require('../../../assets/images/beautiful-young-woman-dress-walking-isolated-white-background.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'12$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>

          <Card
            imguri={require('../../../assets/images/perky-girl-stylish-handbag.jpg')}
            title="Sitlly"
            mainTitle='Sport Dress'
            Dollar={'19$'}
            discount='-15%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>

          <Card
            imguri={require('../../../assets/images/tired-girl-heels.jpg')}
            title="Dorothy Perkins"
            mainTitle='Denim Jacket'
            Dollar={'20$'}
            discount='-20%'
            disColor='#DB3022'
            onPress={()=>navigation.navigate('ProductDetails')}
          />
          </TouchableOpacity>

        </ScrollView>

        <TouchableOpacity onPress={()=>navigation.navigate('Categories')}
          style={{width:'100%',height:verticalScale(400)}}
        >
          <Image
            style={{ marginTop: verticalScale(20),width:'100%',height:'100%' }}
            source={require('../../../assets/images/image4.png')}
          />
          <Text style={{ color: 'white', position: 'absolute', fontSize: moderateScale(30), marginLeft: horizontalScale(210),marginTop:verticalScale(375)}}>New Collection</Text>
          </TouchableOpacity>

         
        <View style={style.collectionBox}>
        
          <View style={{ width: horizontalScale(180), height: verticalScale(380) }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
            <View style={{ width: horizontalScale(180), height: verticalScale(170), }}>
              <Text style={{ color: '#DB3022', fontSize: 35, marginTop: verticalScale(35), marginLeft: horizontalScale(16) }}>Summer </Text>
              <Text style={{ color: '#DB3022', fontSize: 35, marginLeft: horizontalScale(16) }}>Sale </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
            <View style={{ width: horizontalScale(170), height: verticalScale(200) }}>
              <Image
                style={{ width: horizontalScale(180), height: verticalScale(200) }}
                source={require('../../../assets/images/imageblack.png')}
              />
              <Text style={{ position: 'absolute', color: 'white', left: 0, bottom: 0, marginBottom: verticalScale(16), marginHorizontal: 16, fontSize: 35 }}>Black</Text>
            </View>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
          <View style={{ width: horizontalScale(210), height: verticalScale(380), }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../assets/images/image2.png")}
            />
          </View>
          </TouchableOpacity>
        </View>
       
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  // containor: {
  //   width: '100%',
  //   height : 'auto' ,
  //   backgroundColor: '#f5f5f5',
  

  //   borderWidth : 2,
  //   // backgroundColor : 'red'
  // },
  text: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginHorizontal: 16
  },
  subhead: {
    color: '#9B9B9B',
    marginHorizontal: 16
  },
  saletxt: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginHorizontal: 16
  },
  collectionBox: {
    width: '100%',
    height: verticalScale(370),
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop:verticalScale(20)

  },
  imgStyle: {
    resizeMode: 'contain',
    marginLeft: horizontalScale(176),
    width: '100%',
    height: '100%',
  }
})