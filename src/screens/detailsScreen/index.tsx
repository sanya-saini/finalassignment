import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import Txt from '../../components/texts';
import Txtt from '../../components/dScreen';


const DetailsScreen = () => {

  return(
    
    // <ImageBackground source={require('../../assets/images/img.png')} style={{flex:1}}>
    <View>
    <LinearGradient colors={['#352163', '#331972', '#33143C']} style={styles.linearGradient}></LinearGradient>
    <View style={styles.header}>
      <Pics.arrow/>
      <Text style={styles.text1}>7 Days</Text>

      <LinearGradient colors={['#957DCD','#523D7F']} style={styles.linearGradient1} >
      <View style={styles.view1}>
      <Pics.cloudyweather style={styles.cloudpic} />
      <Text style={styles.t1}>23°</Text>
      <Text style={styles.t2}>/</Text>
      <Text style={styles.t3}>17°</Text>
      </View>
      <View style={styles.compview1}>
      <Txt Img={Pics.precipitation}  txt1={'30%'} txt2='Precipitation'/>
      <Txt Img={Pics.humidity}  txt1={'20%'} txt2='Humidity'/>
      <Txt Img={Pics.wind}  txt1={'9km/h'} txt2='WindSpeed'/>
      </View>
      </LinearGradient>

      <View style={styles.compview2}>
      <Txtt txt1='Monday' Img={Pics.cloudy} txt2='Sunny' txt3='+31°' txt4='+51°'/>
      <Txtt txt1='Tuesday' Img={Pics.snowy}   txt2='Cloudy' txt3='+31°' txt4='+51°'/>
      <Txtt txt1='Wednesday' Img={Pics.thunder} txt2='Thunder' txt3='+31°' txt4='+51°'/>
      <Txtt txt1='Thursday' Img={Pics.thunder} txt2='Thunder' txt3='+31°' txt4='+51°'/>
      <Txtt txt1='Friday' Img={Pics.rain} txt2='Rain' txt3='+31°' txt4='+51°'/>
      <Txtt txt1='Saturday' Img={Pics.rain} txt2='Rain' txt3='+31°' txt4='+51°'/>
      </View>

    </View>

    </View>

    // {/* </ImageBackground> */}
   
  );
};

export default DetailsScreen;
