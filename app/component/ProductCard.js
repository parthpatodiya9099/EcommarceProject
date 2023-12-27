import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';

export default function ProductCard({imgurl,dis,titel,price,onPress}) {
    return (
        <View>
            <View style={{ margin: 5 }}>
                <TouchableOpacity style={{ width: horizontalScale(150), height: verticalScale(200), borderWidth: 0.5, borderRadius: moderateScale(10),marginTop:verticalScale(10) }} onPress={onPress}>
                    <Image
                        source={{uri:imgurl.toString().substring(0,8) !== 'https://' ? 'https://i.imgur.com/eGOUveI.jpeg' :imgurl}}
                        style={{ width: '100%', height: '100%', borderRadius: moderateScale(10) }}
                    />
                     {/* <TouchableOpacity style={{ width: horizontalScale(37), height:verticalScale(37), borderWidth: 0.5, borderColor: "black", marginLeft: horizontalScale(115), borderRadius: moderateScale(160), backgroundColor: 'white', padding: 9, paddingRight: horizontalScale(4),marginTop:verticalScale(300),position:'relative' }}>
                        <Feather name="heart" color='black' size={moderateScale(18)} />
                    </TouchableOpacity> */}
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: verticalScale(5) }}>
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Feather name="star" color='#FFBA49' size={moderateScale(16)} />
                    <Text>(10)</Text>             
                </View>
                <View style={{width: horizontalScale(150)}}>
                <Text>{dis}</Text>
                <Text style={{fontSize:19,color:'black'}}>{titel}</Text>
                <Text style={{fontSize:18,color:'black'}}>${price}</Text>
                </View>
                
            </View>

        </View>
    )
}