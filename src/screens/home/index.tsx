import {View, Text, ImageBackground, Image, FlatList,PermissionsAndroid, ActivityIndicator} from 'react-native';
import React, { useEffect, useState} from 'react';
import {styles} from './style';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import Txt from '../../components/texts';
import { useQuery } from 'react-query';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const Home = () => {
  const [longitude, setLongitude] = useState<number>();
    const [latitude, setLatitude] = useState<number>();

    const getLocation = async () => {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Access Required',
                message: 'This app needs to access your location'
            },
            );
            if (permission === 'granted') {
                const currentLocation = await Geolocation.getCurrentPosition(
                    (position) => {
                        console.log('hhhhhhhhhh', position);
                        //getting latitude
                        const currentLatitude = (position.coords.latitude);
                        //set latitude
                        setLatitude(currentLatitude);
                        //getting longitude
                        const currentLongitude = (position.coords.longitude);
                        // set longitude
                        setLongitude(currentLongitude);
                        
                        
                        // Geocoder.geocodePosition({ lat: position.coords.latitude, lng: position.coords.longitude }).then(res => {
                        //     console.log(res[0].adminArea)
                        //     setAddress(res[0].adminArea)
                        // })
                            // .catch(err => console.log(err))
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
  const data1 = [
    {
      time: '10 AM',
      img: Pics.cloudy,
      temp: '23°',
    },
    {
      time: '12 AM',
      img: Pics.snowy,
      temp:'23°',
    },
    {
      time: '1 PM',
      img: Pics.snowy,
      temp: '23°',
    },
    {
      time: '3 PM',
      img: Pics.thunder,
      temp: '23°',
    },
    {
      time: '5 PM',
      img: Pics.rain,
      temp: '23°',
    },
    {
      time: '10 PM',
      img: Pics.rain,
      temp: '23°',
    },
  ];

  const data2 = [
    {
      city: 'Delhi',
      img: Pics.cloudy,
      weather: 'Sunny',
      degree:'9°',
    },
    {
      city: 'Kolkata',
      img: Pics.snowy,
      weather: 'Snowy',
      degree:'9°',
    },
    {
      city: 'Hyderabad',
      img: Pics.rain,
      weather: 'Rainy',
      degree:'9°',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <LinearGradient colors={['#957DCD','#523D7F']} style={styles.linearGradient2} >
        <Text style={styles.time}>{item.time}</Text>
          <item.img style={styles.imgg}/>
          <Text style={styles.temp}>{item.temp}</Text>
        </LinearGradient>
      </View>
    );
  };

  const renderData =({item}) => {
    return (
      <View>
        <LinearGradient colors={['#957DCD','#523D7F']} style={styles.linearGradient3} >
          <Text style={styles.city}>{item.city}</Text>
          <item.img style={styles.imggg}/>
          <Text style={styles.weather}>{item.weather}</Text>
          <Text style={styles.degree}>{item.degree}</Text>
        </LinearGradient>
      </View>

    );
  };


console.log(`${latitude},${longitude}`);
  const { isLoading, error, data:yt } = useQuery('', async () => {
    console.log(`${latitude},${longitude}`);
    const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json',
    {
      // params: {q: `${latitude},${longitude}`}, 
      
      params: {q: '37.4220936,-122.083922'},
      headers: {
        'X-RapidAPI-Key': '9c990d7ed0msh6437e1bae24d7eep1c6402jsncf6c307781da',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    console.log(response.data);
    
    return response.data;
  });
  if (isLoading) {
    return <View>
    <ImageBackground source={require('../../assets/images/img.png')}>
    <LinearGradient colors={['#331972', '#33143C']} style={styles.linearGradient}>
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <ActivityIndicator size={'large'} color={'white'} />
      </View>
      </LinearGradient>
    </ImageBackground>

      </View>;
  }
  if (error) {
    return <View><Text>An error has occurred:{error.message}</Text></View>;
  }


  const renderWeather =({item}) => {
    return (
      <View>
       {/* console.log(item.cloud); */}
          <Text style={styles.city}>{item.cloud}</Text>
          <item.img style={styles.imggg}/>
          <Text style={styles.weather}>{item.weather}</Text>
          <Text style={styles.degree}>{item.degree}</Text>
        
      </View>

    );
  };

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'location Permission',
  //         message: 'Whats your location?',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OKAY',
  //       },
  //     );
  //     console.log('granted', granted);
  //     if (granted === 'granted') {
  //       console.log('You can use Geolocation');
  //       return true;
  //     } else {
  //       console.log('You cannot use Geolocation');
  //       return false;
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  // };
  // useEffect(()=>{
  //   requestLocationPermission();
  // },[]);

 

  return (
    <ImageBackground source={require('../../assets/images/img.png')} style={{flex:1}}>
    
    <LinearGradient colors={['#331972', '#33143C']} style={styles.linearGradient}>
      
      {/* <Pics.bg style={styles.bgi} /> */}
    <View style={styles.mainview}>

    <View style={styles.header}>
      <Pics.rec/>
      <Text style={styles.text1}>{yt.location.name}</Text>
      <Pics.reload/>
    </View>
      <Text style={styles.text2}> Mostly Sunny</Text>
      <Pics.cloudyweather style={styles.cloudpic} />
      <Text style={styles.text3}>{yt.current.temp_c}°</Text>
      <Text style={styles.text4}>Friday, 26 August 2022 | 10:00</Text>

      <LinearGradient colors={['#957DCD','#523D7F']} style={styles.linearGradient1} >
      <View style={styles.compview}>
      <Txt Img={Pics.precipitation}  txt1={'30%'} txt2='Precipitation'/>
      <Txt Img={Pics.humidity}  txt1={'20%'} txt2='Humidity' />
      <Txt Img={Pics.wind}  txt1={'9km/h'} txt2='WindSpeed'/>
      </View>
      </LinearGradient>
      
      <View style={styles.view1}>
      <Text style={{color:'white'}}>Today</Text>
      <Text style={{color:'white'}}>7-Day Forecasts</Text>
      </View>
      
      <FlatList data={data1} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false}/>
      
      <View style={styles.view2}>
      <Text style={styles.text5}>Other Cities</Text>
      <Text style={styles.text5}>+</Text>
      </View>

      <FlatList data={data2} renderItem={renderData} horizontal={true} showsHorizontalScrollIndicator={false}/>

      
    </View>

    </LinearGradient>
    </ImageBackground>
   
  );
};

export default Home;
