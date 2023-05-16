import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import fonts from "../../assets/fonts";
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  return (
    // <ImageBackground source={require('../../assets/images/img.png')} style={{flex:1}}>
    <View style={{backgroundColor:'#fff',flex: 1}}>

      <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', marginTop: 200, textAlign: 'center', fontFamily:fonts.SEMIBOLD}}>Sky Spy</Text>
      
      <View style={{ alignItems: 'center', marginTop: 20, height: 400 }}>
        <LottieView
          source={require('../../assets/waveloading.json')}
          autoPlay
          loop={false}
          resizeMode='cover'
        />
      </View>

    </View>
    //  </ImageBackground>
  );
};

export default Splash;