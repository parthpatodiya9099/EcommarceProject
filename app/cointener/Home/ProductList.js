import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LikeCard from '../../component/Card/LikeCard';
import Card from '../../component/Card/Card';
import CategariCard from '../../component/Card/CategariCard';
import AppButton from '../../component/Button/AppButton';
import ProductCard from '../../component/ProductCard';

let arr = [];
export default function ProductList({ navigation }) {

  const [model, Setmodel] = useState(false)
  const [productData, SetProductData] = useState([])
  const [search, Setsearch] = useState('')
  const [sort, setSort] = useState('')
  const [category, SetCategory] = useState('')

  const handlepress = () => {
    Setmodel(true)
  }
  const handleclose = () => {
    Setmodel(false)
  }

  useEffect(() => {
    HandleData();
  }, []);
  const HandleData = async () => {
    const responce = await fetch('https://api.escuelajs.co/api/v1/products')
    const Data = await responce.json();
    SetProductData(Data)
  }

  const SearchsortData = () => {
    let fdata = productData.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase())
    )
    if (category !== '') {
      fdata = productData.filter((v) => category == v.category.name)
    }
    fdata = fdata.sort((a, b) => {
      if (sort === "AZ") {
        return (a.title > b.title ? 1 : -1)
      } else if (sort === "ZA") {
        return (a.title < b.title ? 1 : -1)
      } else if (sort === "hl") {
        return (b.price - a.price)
      } else if (sort === "lh") {
        return (a.price - b.price)
      } else {
        return (a.title > b.title ? 1 : -1)
      }
    })


    return fdata;
  }
  const finleData = SearchsortData()



  return (
    <View>
      {
        finleData.map((v) => {
          if (!arr.includes(v.category.name)) {
            arr.push(v.category.name)
          }
        })
      }


      {/* category */}

      <View style={style.contener}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={style.categorybox} onPress={() => SetCategory('')}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>All</Text>
          </TouchableOpacity>
          {
            arr.map((v, i) => {
              return (
                <TouchableOpacity style={style.categorybox} key={i} onPress={() => SetCategory(v)}>
                  <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', padding: 6 }}>{v}</Text>
                </TouchableOpacity>
              )
            })
          }

        </ScrollView>

      </View>

      {/* Filter */}

      <View style={style.filterbox}>
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
          <Text style={{ fontSize: moderateScale(18), marginLeft: verticalScale(7), marginTop: verticalScale(2) }}>Price:High To Low</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: horizontalScale(50), flexShrink: 1 }}>
          <Feather name='list' color='black' size={25} />
        </TouchableOpacity>
      </View>

      {/* Searchbox */}

      <View>
        <TextInput
          placeholder='Search...'
          style={style.search}
          onChangeText={Setsearch}
          value={search}
        />
      </View>

      {/* ProductCard */}

      <ScrollView style={{ marginBottom: verticalScale(80), }}>
        <View style={style.productcardbox}>
          {
            finleData.map((v, i) => {
              return (
                <ProductCard
                  key={v.id}
                  imgurl={v.images[0]}
                  title={v.title}
                  price={v.price}
                  onPress={() => navigation.navigate('ProductDetails')}
                />
              )
            })
          }

        </View>
      </ScrollView>

      {/* Modal */}

      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={model}
        >
          <View style={style.modlestyle}>
            <TouchableOpacity style={style.closemodal} onPress={() => handleclose()}>
              <Feather name='minus' color={'black'} size={moderateScale(40)} />
            </TouchableOpacity>
            <Text style={style.titeltext}>Sort by</Text>

            <View style={style.sortboxmodal}>
              <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }} onPress={() => Setmodel(false)}>
                <Text style={style.sortingtext}>Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('AZ')), Setmodel(false) }}>
                <Text style={style.sortingtext}>A To Z</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('ZA')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Z To A</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('lh')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Price: lowest to high</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.sortingbox} onPress={() => { (setSort('hl')), Setmodel(false) }}>
                <Text style={style.sortingtext}>Price: highest to low</Text>
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
  search: {
    width: '89%',
    marginLeft: horizontalScale(20),
    borderBottomWidth: 0.5,
  },
  contener: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    padding: 5
  },
  categorybox: {
    width: horizontalScale(110),
    height: verticalScale(35),
    backgroundColor: 'black',
    borderRadius: moderateScale(20),
    marginLeft: horizontalScale(10)
  },
  filterbox: {
    width: '100%',
    height: verticalScale(35),
    flexDirection: 'row',
    padding: 5,
  },
  productcardbox: {
    width: '90%',
    marginLeft: horizontalScale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  closemodal: {
    width: horizontalScale(90),
    height: verticalScale(7),
    backgroundColor: 'gray',
    marginLeft: horizontalScale(140)
  },
  sortboxmodal: {
    width: '100%',
    height: '100%',
    marginTop: verticalScale(30),
  },
  sortingbox: {
    width: '100%',
    height: verticalScale(55),
    borderWidth: 0.5
  },
  sortingtext: {
    fontSize: moderateScale(22),
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20),
    color: 'black'
  },
  titeltext: {
    fontSize: moderateScale(20),
    color: 'black',
    marginLeft: horizontalScale(157),
    marginTop: verticalScale(15)
  }
})