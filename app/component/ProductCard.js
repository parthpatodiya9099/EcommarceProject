import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';

export default function ProductCard() {
    return (
        <View>
            <View style={{margin:10}}>
                <TouchableOpacity style={{width:horizontalScale(150),height:verticalScale(200),borderWidth:0.5}}>
                    <Image 
                        source={require('../../assets/images/front-view-smiley-woman-pointing-herself.jpg')}
                        style={{width:'100%',height:'100%'}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{width:horizontalScale(35),height:verticalScale(35),borderRadius:moderateScale(100),borderWidth:0.5,alignItems:'center',paddingTop:verticalScale(6)}}>
                    <Feather name={'heart'} size={20} color='black' />
                </TouchableOpacity>
            </View>

        </View>
    )
}