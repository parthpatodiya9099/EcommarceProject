import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../component/Button/AppButton';

export default function SignUp({navigation}) {
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');



  return (
    <View style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor="#f5f5f5"
        barStyle="dark-content"

      />
      <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
      <Text style={style.text}>Login</Text>

      <TextInput
        style={style.input1}
        onChangeText={setemail}
        value={email}
        placeholder='Email'
        placeholderTextColor="grey"

      />
      <TextInput
        style={style.inputtext}
        onChangeText={setpassword}
        value={password}
        placeholder='Password'
        keyboardType='numeric'
        placeholderTextColor="grey"

      />
      <Text style={{ color: 'black', marginLeft: 230, marginTop: 10 }}>Forget Your Password <Feather style={style.icon} name="chevrons-right" color={'red'} size={19} /></Text>

      <View style={{marginTop:30}}>
        <AppButton 
          titel="LOGIN"
        />
      </View> 

      {/* <Pressable
        style={style.buttontxt}
        onPress={() =>navigation.navigate('Product')}>
        <Text style={{ color: 'white'  , fontSize : 20}}>Login</Text>

      </Pressable> */}
      <View style={style.parent}>
        <Text style={style.textStyle}>Or sign up with social account</Text>
      </View>

      <View style={style.btnparent}>
        <Pressable
          style={style.btnstyle}
          onPress={() => ('')}>
        </Pressable>
        <Pressable
          style={style.btn}
          onPress={() => ('')}>
          <MaterialIcons name="facebook" color={'darkblue'} size={42} marginLeft={2} />
        </Pressable>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
      height: 1000,
      backgroundColor: '#f5f5f5',
  },
  text: {
      color: 'black',
      fontSize: 30,
      marginTop: 20,
      marginHorizontal: 16,
  },
  icon: {
      marginTop: 15,
      marginHorizontal: 16,
  },
  buttontxt: {
      backgroundColor: 'red',
      marginHorizontal: 16,
      padding: 12,
      borderRadius: 30,
      marginTop: 24,
      alignItems: 'center',
      color: 'white',
  },
 
  input1: {
      marginTop: 70,
      marginHorizontal: 16,
      padding: 20,
      color: 'black',
      backgroundColor: 'white',
      borderRadius : 5,
      shadowOpacity: 0.10,
      shadowRadius: 30,
      elevation: 4,

  },
  inputtext: {
      marginTop: 15,
      backgroundColor: 'white',
      padding: 20,
      marginHorizontal: 16,
      color: 'black',
      borderRadius : 5,
      shadowOpacity: 0.10,
      shadowRadius: 30,
      elevation: 4,
  },
  textStyle: {
      color: 'black',
      marginHorizontal: 16,
      marginTop: 130,
      alignItems: 'center'
  }, 
  parent : {
      alignItems : 'center',
      marginTop : 70
  },
  btnstyle :{
      marginTop : 10,
      backgroundColor : 'white',
      padding : 25,
      width : 90,
      marginHorizontal : 16,
      borderRadius : 30,
      marginLeft : 80,
      shadowOpacity: 0.10,
      shadowRadius: 30,
      elevation: 4,
  },
  btn :{
      marginTop : 10,
      backgroundColor : 'white',
      padding : 25,
      width : 95,
      borderRadius : 30,
      marginRight : 90,
      shadowOpacity: 0.10,
      shadowRadius: 30,
      elevation: 4,
  },
  btnparent : {
      flexDirection : 'row',
      justifyContent : 'space-between',
  }
})