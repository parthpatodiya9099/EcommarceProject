import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BagCard from '../../component/Card/BagCard'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../component/Button/AppButton';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';

export default function MyBag({navigation}) {
  const [count,setcount] =useState(0)
  const handlepluse = () => {
    setcount(count +1 )
  }
  const handlemiuns = () => {
    setcount(count -1 )
  }
  const HandleAction = () => {
    navigation.navigate('Address')
  }

  return (
    <View>
      <ScrollView>
        <BagCard
          imgurl={require('../../../assets/images/front-view-smiley-woman-pointing-herself.jpg')}
          color="white"
          size="L"
          price={count*12}
          contity={count}
          Product="T-Shirt"
          onPressP={()=>handlepluse()}
          onPressM={()=>handlemiuns()}
        />
        <BagCard
          imgurl={require('../../../assets/images/beautiful-smiling-brunette-girl-pointing-fingers-your-logo-showing-something-center.jpg')}
          color="white"
          size="M"
          price={count*10}
          contity={count}
          Product="T-Shirt"
          onPressP={()=>handlepluse()}
          onPressM={()=>handlemiuns()}
        />
        <BagCard
          imgurl={require('../../../assets/images/beautiful-young-woman-dress-walking-isolated-white-background.jpg')}
          color="Blue"
          size="X"
          price={count*25}
          contity={count}
          Product="Night Dress"
          onPressP={()=>handlepluse()}
          onPressM={()=>handlemiuns()}
        />
      </ScrollView>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={{ width:horizontalScale(310), height:verticalScale(40),marginLeft:horizontalScale(20),marginTop:verticalScale(20),backgroundColor:"white",borderRadius:moderateScale(10),shadowOpacity: 0.10,
        shadowRadius: 30,elevation: 4 }}
        placeholder="Enter Your Promo Code"
        keyboardType="numeric"
      />
      <TouchableOpacity style={{width:horizontalScale(40),height:verticalScale(40),backgroundColor:'black',borderRadius:moderateScale(100),marginTop:verticalScale(20),padding:10}}>
          <Feather name='arrow-right' size={moderateScale(20)} color="white" />
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop:verticalScale(30),marginLeft:horizontalScale(20),}}>
          <Text style={{fontSize:moderateScale(15),marginTop:5}}>Total Amount:</Text>
          <Text style={{fontSize:moderateScale(20),marginLeft:230,color:'black'}}>$102</Text>
      </View>
      <View style={{marginTop:verticalScale(10)}}>
      <AppButton 
          titel="CHECK OUT"
          onPress={()=>HandleAction()}          
       />
      </View>
      
      

    </View>
  )
}