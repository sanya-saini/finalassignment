import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Icons } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const SwiperComponent = () => {
  const navigation = useNavigation();
  const { dispatch } = useNavigation();
  const ToDashBoard = () => {
    // navigation.navigate('DashboardNavigation');
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'DashboardNavigation' },
        ],
      }),
    );
  }
  return (

    <Swiper loop={false} autoplay dotColor='grey' activeDotColor='#352163'>

      <View style={styles.slide1}>

        <View style={styles.imgView}>
          <Pics.hourly style={styles.img} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.text1}>Detailed Hourly</Text>
          <Text style={styles.text2}>Forecast</Text>
          <Text style={styles.text3}>Get in - depth weather</Text>
          <Text style={styles.text4}>information.</Text>
        </View>

      </View>

      <View style={styles.slide1}>

        <View style={styles.imgView}>
          <Pics.realtime style={styles.img} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.text1}>Real-Time</Text>
          <Text style={styles.text2}>Weather Map</Text>
          <Text style={styles.text3}>Watch the progress of the</Text>
          <Text style={styles.text4}>precipitation to stay informed</Text>
        </View>

      </View>

      <View style={styles.slide1}>
        <View style={styles.imgView}>
          <Pics.aroundworld style={styles.img} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.text1}>Weather Around</Text>
          <Text style={styles.text2}>the World</Text>
          <Text style={styles.text3}>Add any location you want and</Text>
          <Text style={styles.text4}>swipe easily to change.</Text>
          
          {/* <TouchableOpacity onPress={ToDashBoard}>
        <Text style={{fontFamily: fonts.SEMIBOLD, fontSize: 20, marginTop:70, color:'#fff'}}>{'Next'}</Text>
        </TouchableOpacity> */}
        

        <View>
          <TouchableOpacity onPress={ToDashBoard}>
            <Text style={styles.next}> ➟ </Text>
          </TouchableOpacity>
        </View>

        </View>

      </View>



    </Swiper>

  );
};
export default SwiperComponent;
