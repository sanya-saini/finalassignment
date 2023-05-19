import {View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  return (
    <View style={{alignItems:'center', marginTop:150, height:500}}>
      {/* <LinearGradient colors={['#F2F4F7', '#BCC8D6']}> */}
        <LottieView
        source={require('../../assets/waveloading.json')}
        autoPlay
        loop={false}
        resizeMode='cover'
        />
      {/* </LinearGradient> */}
    </View>
  );
};

export default Splash;