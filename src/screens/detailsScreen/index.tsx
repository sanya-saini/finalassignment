import { View, Text, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import DetailBox from '../../components/texts';
import Day from '../../components/dScreen';
import axios from 'axios';
import { useQuery } from 'react-query';
import Home from '../home';
import { format } from "date-fns";
import { useNavigation } from '@react-navigation/native';
import { API_HOST, API_KEY, BASE_URL, CURRENT, FORECAST } from '../../services/endpoints';
import colors from '../../assets/colors';


const DetailsScreen = () => {

  const { navigate } = useNavigation();
  const [maxtemp, setMaxtemp] = useState<string>('')


  const { data: forecastData } = useQuery('gggg', async () => {
    const response = await axios.get(BASE_URL + FORECAST,
      {
        // params: {q: `${latitude},${longitude}`}, 

        params: {
          q: 'Chandigarh',
          days: '7'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST

        }
      });
    console.log('bbbbbbbbbbbbbbbbbbb', response.data.forecast.forecastday[0].day.condition.text);

    return response.data;
  });

  const { isLoading, error, data: currentData } = useQuery('', async () => {
    // console.log(`${latitude},${longitude}`);
    const response = await axios.get(BASE_URL + CURRENT,
      {
        // params: {q: `${latitude},${longitude}`}, 

        params: { q: '30.7333, 76.7794' },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      });
    console.log('result    ', response.data.current.condition.icon);

    return response.data;
  });



  return (

    <LinearGradient colors={[colors.violet, colors.blue, colors.purple]} style={styles.linearGradient}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigate('Home') }}>
          <Pics.arrow />
        </TouchableOpacity>
        <Text style={styles.text1}>3 Days</Text>
      </View>

      <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.linearGradient1} >
        <View style={styles.view1}>
          <Image source={{ uri: 'https:' + currentData?.current.condition.icon }} style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: 150 }} />
          <Text style={styles.t1}>{forecastData?.forecast?.forecastday[0].day.maxtemp_c}°</Text>
          <Text style={styles.t2}>/</Text>
          <Text style={styles.t3}>{forecastData?.forecast?.forecastday[0].day.mintemp_c}°</Text>
        </View>
        <View style={styles.compview1}>
          <DetailBox Img={Pics.precipitation} txt1={currentData?.current.precip_mm + ' mm'} txt2='Precipitation' />
          <DetailBox Img={Pics.humidity} txt1={currentData?.current.humidity + ' %'} txt2='Humidity' />
          <DetailBox Img={Pics.wind} txt1={currentData?.current.wind_kph + ' km/h'} txt2='WindSpeed' />
        </View>
      </LinearGradient>

      <View style={styles.compview2}>
        {/* <View style={{justifyContent:'center',}}> */}
        <Day txt1={forecastData?.forecast.forecastday[0].date} Img={forecastData.forecast.forecastday[0].day.condition.icon} txt2={forecastData.forecast.forecastday[0].day.condition.text} txt3={forecastData.forecast.forecastday[0].day.mintemp_c + '°'} txt4={forecastData.forecast.forecastday[0].day.maxtemp_c + '°'} />
        {/* </View> */}
        <Day txt1={forecastData?.forecast.forecastday[1].date} Img={forecastData.forecast.forecastday[1].day.condition.icon} txt2={forecastData.forecast.forecastday[1].day.condition.text} txt3={forecastData.forecast.forecastday[1].day.mintemp_c + '°'} txt4={forecastData.forecast.forecastday[1].day.maxtemp_c + '°'} />
        <Day txt1={forecastData?.forecast.forecastday[2].date} Img={forecastData.forecast.forecastday[2].day.condition.icon} txt2={forecastData.forecast.forecastday[2].day.condition.text} txt3={forecastData.forecast.forecastday[2].day.mintemp_c + '°'} txt4={forecastData.forecast.forecastday[2].day.maxtemp_c + '°'} />
      </View>


    </LinearGradient>
  );
};

export default DetailsScreen;
