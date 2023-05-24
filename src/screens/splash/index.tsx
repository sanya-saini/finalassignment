import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import fonts from "../../assets/fonts";
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors';

const Splash = () => {
  return (
    // <ImageBackground source={require('../../assets/images/img.png')} style={{flex:1}}>
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold', color: colors.black, textAlign: 'center', fontFamily: fonts.SEMIBOLD }}>Sky Spy</Text>

        <View style={{ height: 400, width: 400 }}>

          <LottieView
            source={require('../../assets/waveloading.json')}
            autoPlay
            loop={false}
            resizeMode='cover'
          />
        </View>
      </View>

    </View>
    //  </ImageBackground>
  );
};

export default Splash;