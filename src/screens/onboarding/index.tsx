import React,{useEffect,useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Icons } from '../../assets/Icons';
import fonts from '../../assets/fonts';
import { useNavigation , CommonActions} from '@react-navigation/native';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const SwiperComponent = () => {
    const navigation = useNavigation();
    const {dispatch} = useNavigation();
    const ToDashBoard = () => {
        // navigation.navigate('DashboardNavigation');
        dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {name: 'DashboardNavigation'},
            ],
          }),
        );
    }
  return (
    
    <Swiper loop={false} autoplay>
      
      <View style={styles.slide1}>

        <View style={{alignItems:'center', height:300, width:300}}>
        <Pics.hourly style={styles.img}/>
        </View>
       
       <View >
       <Text style={styles.text}>Detailed Hourly Forecast</Text>
       <Text style={styles.text1}>Get in - depth weather information.</Text>

       </View>
      
      </View>

      <View style={styles.slide1}>

        <View style={{alignItems:'center', height:300, width:300}}>
        <Pics.realtime style={styles.img}/>
        </View>
       
       <View >
       <Text style={styles.text}>Real-Time Weather Map</Text>
       <Text style={styles.text1}>Watch the progress of the precipitation to stay informed</Text>
       </View>
       
      </View>

      <View style={styles.slide1}>
        <View style={{alignItems:'center', height:300, width:300}}>
        <Pics.aroundworld style={styles.img}/>
      </View>
       
       <View >
        <Text style={styles.text}>Weather Around the World</Text>
       <Text style={styles.text1}>Add any location you want and swipe easily to change.</Text>
        {/* <TouchableOpacity onPress={ToDashBoard}>
        <Text style={{fontFamily: fonts.SEMIBOLD, fontSize: 20, marginTop:70, color:'#fff'}}>{'Next'}</Text>
        </TouchableOpacity> */}
       </View>

       <View>
        <TouchableOpacity onPress={ToDashBoard}>
        <Text style={{color:'white', fontSize:30, position:'absolute', backgroundColor:'black', opacity:0.6, borderRadius:15, top:90, right:-50}}> NEXT </Text>
        </TouchableOpacity>
       </View>
       
      </View>

      
      
    </Swiper>
    
  );
};
export default SwiperComponent;
