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
import { Strings } from '../../constants/strings';

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
          <Text style={styles.text1}>{Strings.onboarding.hourly}</Text>
          <Text style={styles.text2}>{Strings.onboarding.forecast}</Text>
          <Text style={styles.text3}>{Strings.onboarding.indepth_weather}</Text>
          <Text style={styles.text4}>{Strings.onboarding.information}</Text>
        </View>

      </View>

      <View style={styles.slide1}>

        <View style={styles.imgView}>
          <Pics.realtime style={styles.img} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.text1}>{Strings.onboarding.real_time}</Text>
          <Text style={styles.text2}>{Strings.onboarding.weather_map}</Text>
          <Text style={styles.text3}>{Strings.onboarding.progress}</Text>
          <Text style={styles.text4}>{Strings.onboarding.stay_informed}</Text>
        </View>

      </View>

      <View style={styles.slide1}>
        <View style={styles.imgView}>
          <Pics.aroundworld style={styles.img} />
        </View>


        <View style={styles.textView}>
          <Text style={styles.text1}>{Strings.onboarding.weather_around}</Text>
          <Text style={styles.text2}>{Strings.onboarding.the_world}</Text>
          <Text style={styles.text3}>{Strings.onboarding.add_location}</Text>
          <Text style={styles.text4}>{Strings.onboarding.change}</Text>
        </View>


        <View style={styles.next}>
          <TouchableOpacity onPress={ToDashBoard}>
            <Text style={{ color: 'white', fontSize: 22, paddingBottom: 4, paddingHorizontal: 1.5 }} > ➟ </Text>
          </TouchableOpacity>
        </View>
      </View>

    </Swiper>

  );
};
export default SwiperComponent;
