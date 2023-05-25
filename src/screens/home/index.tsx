import { View, Text, ImageBackground, Image, FlatList, PermissionsAndroid, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import DetailBox from '../../components/texts';
import { useQuery } from 'react-query';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { ScrollView } from 'react-native-gesture-handler';
import { format } from "date-fns";
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/colors';
import { API_HOST, API_KEY, BASE_URL, CURRENT, FORECAST } from '../../services/endpoints';
import { Strings } from '../../constants/strings';
import citiesData from './cities';
import Geocoder from 'react-native-geocoder';
import routes from '../../assets/routes';

const Home = () => {

  const [longitude, setLongitude] = useState<number>();
  const [latitude, setLatitude] = useState<number>();
  const { navigate } = useNavigation();
 
  const [address, setaddress] = useState('Chandigarh');

  // NOTIFICATION
  const requestPermissions = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.requestPermissions({
        alert: true,
        badge: true,
        sound: true,
        critical: true,
      }).then(
        (data) => {
          console.log('PushNotificationIOS.requestPermissions', data);
        },
        (data) => {
          console.log('PushNotificationIOS.requestPermissions failed', data);
        },
      );
    }
    return PushNotification.requestPermissions()
  }
  const createNotificationChannel = () => {
    PushNotification.createChannel({
      channelId: 'buddy',
      channelName: 'Buddy',
      channelDescription: 'Buddy',
      soundName: 'default',
      vibrate: true,
    },
      (created) => console.log(`createChannel 'buddy' returned ‘${created}’`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    requestPermissions()
  }
  useEffect(() => {
    createNotificationChannel();
  }, [])
  const testpush = () => {
    // console.log('bell pressed');
    PushNotification.localNotification({
      channelId: "buddy",
      title: "Bell Pressed", // (optional)
      message: "Notification", // (required)
    });
  }
  const testschepush = () => {
    PushNotification.localNotificationSchedule({
      channelId: "buddy",
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + 1 * 1000), // in 10 secs
    });
  }


  // GEOLOCATION
  const getLocation = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: Strings.permissions.title,
        message: Strings.permissions.message,
      },
      );
      if (permission === 'granted') {
        const currentLocation = await Geolocation.getCurrentPosition(
          (position) => {
            // console.log('hhhhhhhhhh', position);
            //getting latitude
            const currentLatitude = (position.coords.latitude);
            //set latitude
            setLatitude(currentLatitude);
            //getting longitude
            const currentLongitude = (position.coords.longitude);
            // set longitude
            setLongitude(currentLongitude);
      
        
            const lat =  latitude;
          const lng = longitude;
         Geocoder.geocodePosition({lat: lat, lng: lng}).then(respo => {
           setaddress(respo);
          console.log('vfcghvbhcdyxcghghdgcfvh',respo[0].adminArea);
        });
      }

          
        );
      }
    }
    catch (error) {
      console.log(error);
    }


  }
  useEffect(() => {
    getLocation();
  }, []);


  const test = `${latitude}, ${longitude}`;
  const [loc, setLoc] = useState('30.7333, 76.7794');
  const [locName, setLocName] = useState('Chandigarh');

  // FLATLIST 1 
  const renderItem = ({ item }) => {
    const date = new Date(`${item.time}`)
    // console.log(item.condition.icon);
    return (
      <View>
        <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.linearGradient2} >
          <Text style={styles.time}>{format(date, 'h a')}</Text>
          <Image source={{ uri: 'https:' + item.condition.icon }} style={styles.imgg} />
          <Text style={styles.temp}>{item.temp_c + '°'}</Text>
        </LinearGradient>
      </View>
    );
  };

  const setLocation = async(item)=>{
   await setLoc(item.loc)
    refetch()
    
  }

  // FLATLIST 2
  const renderData = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={()=>setLocation(item)}>
        <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.linearGradient3} >
          <Text style={styles.city}>{item.city}</Text>
          <item.img style={styles.imggg} />
          {/* <Text style={styles.weather}>{item.weather}</Text>
          <Text style={styles.degree}>{item.degree}</Text> */}
        </LinearGradient>
        </TouchableOpacity>
      </View>

    );
  };

  // APIS

  const { isLoading, error, data: currentData, refetch } = useQuery('', async () => {
    // console.log(`${latitude},${longitude}`);
    const response = await axios.get(BASE_URL + CURRENT,
      {
        // params: {q: `${latitude},${longitude}`}, 

        params: { q: loc },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      });
    console.log('result    ', response.data.location.name);
    setLocName(response.data.location.name)
    forecastRefetch();

    return response.data;
  });

  const { isLoading: forecastLoading, error: forecastError, data: forecastData, refetch: forecastRefetch } = useQuery('gggg', async () => {
    const response = await axios.get(BASE_URL + FORECAST,
      {

        params: {
          q: locName,
          days: '7'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST

        }
      });
    console.log('bbbbb', response.data.forecast.forecastday[0].hour[0].temp_c);

    return response.data;
  });

  if (isLoading || forecastLoading) {
    return (<View>
        <ImageBackground source={require('../../assets/images/img.png')}>
            <LinearGradient colors={[colors.blue, colors.purple]} style={styles.linearGradient}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator size={'large'} color={'white'} />
                </View>
            </LinearGradient>
        </ImageBackground>

    </View>)
}
  
  
  if (error || forecastError) {
    return <View><Text>{Strings.error}</Text></View>;
  }
  const date = new Date(`${currentData.location?.localtime}`);
  const datarefresh = () => {
    refetch();
    forecastRefetch();
  }

  return (
    
    <ImageBackground source={require('../../assets/images/img.png')} style={{ flex: 1 }}>

      <LinearGradient colors={[colors.blue, colors.purple]} style={styles.maingradient}>
      <ScrollView >

          <View style={styles.mainview}>

            <View style={styles.header}>

              <TouchableOpacity onPress={testschepush}>
                <Pics.rec />
              </TouchableOpacity>

              <Text style={styles.text1}>{currentData.location?.name}</Text>

              <TouchableOpacity onPress={datarefresh}>
                <Pics.reload />
              </TouchableOpacity>

            </View>

            <Text style={styles.text2}>{currentData.current?.condition.text}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={{ uri: 'https:' + currentData.current?.condition.icon }} style={{ alignItems: 'center', justifyContent: 'center', height: 150, width: 150 }} />
            </View>
            <Text style={styles.text3}>{currentData.current?.temp_c}°</Text>
            <Text style={styles.text4}>{format(date, 'EEEE, do MMMM yyyy | pp')}</Text>

            <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.linearGradient1} >
              <View style={styles.compview}>
                <DetailBox Img={Pics.precipitation} txt1={currentData.current.precip_mm + ' mm'} txt2='Precipitation' />
                <DetailBox Img={Pics.humidity} txt1={currentData.current.humidity + ' %'} txt2='Humidity' />
                <DetailBox Img={Pics.wind} txt1={currentData.current.wind_kph + ' km/h'} txt2='WindSpeed' />
              </View>
            </LinearGradient>

            <View style={styles.view1}>
              <Text style={{ color: colors.white }}>{Strings.home.today}</Text>
              <TouchableOpacity onPress={() => { navigate(routes.Dashboard.detailsScreen.path) }}>
                <Text style={{ color: colors.white }}>{Strings.home.day_forecasts}</Text>
              </TouchableOpacity>
            </View>

            <FlatList data={forecastData.forecast.forecastday[0].hour} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />

            <View style={styles.view2}>
              <Text style={styles.text5}>{Strings.home.cities}</Text>
              {/* <Text style={styles.text5}>+</Text> */}
            </View>

            <FlatList data={citiesData} renderItem={renderData} horizontal={true} showsHorizontalScrollIndicator={false} />


          </View>
          </ScrollView>
      </LinearGradient>
      
    </ImageBackground>
    
  );
};

export default Home;
