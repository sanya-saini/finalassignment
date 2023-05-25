import { View, Text, ImageBackground, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Pics } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import City from '../../components/searchScreen';
import colors from '../../assets/colors';
import { Strings } from '../../constants/strings';
import axios from 'axios';
import { useQuery } from 'react-query';
import { API_HOST, API_KEY, BASE_URL, FORECAST, SEARCH } from '../../services/endpoints';
import { useNavigation } from '@react-navigation/native';
import routes from '../../assets/routes';



const Search = () => {
    const [address, setAddress] = useState('');
    const { navigate } = useNavigation();
    const [city, setCity] = useState('Chandigarh');
    const [show, setshow] = useState(true);


    const { isLoading, error, data, refetch } = useQuery('vg', async () => {
        // console.log(`${latitude},${longitude}`);
        const response = await axios.get(BASE_URL + SEARCH,
            {

                params: { q: `${city}` },
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': API_HOST
                }
            });
        console.log('result    ', response.data[0]);

            if (response.data[0]=== undefined) {
                setshow(false);
                
            }
            else{
                setshow(true);
            }
        return response.data[0];
    });
    const getLocData = async () => {
        await setCity(address);
        refetch();
        forecastRefetch();
    }

    const { isLoading: forecastLoading, error: forecastError, data: forecastData, refetch: forecastRefetch } = useQuery('gggg', async () => {
        const response = await axios.get(BASE_URL + FORECAST,
            {

                params: {
                    q: city,
                    days: '7'
                },
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': API_HOST

                }
            });
        console.log('currenttemp', response.data.current.temp_c);

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

    return (
        <ImageBackground source={require('../../assets/images/img.png')} style={{ flex: 1 }}>


            <LinearGradient colors={[colors.blue, colors.purple]} style={styles.linearGradient}>


                <View style={styles.header}>
                    <Text style={styles.text1}>{Strings.search}</Text>
                </View>
                <TouchableOpacity onPress={() => { navigate(routes.Dashboard.Home.path) }} style={{ position: 'absolute', top: 20, left: 15 }}>
                    <Pics.arrow style={styles.arrowPic} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.linearGradient2}>

                        <View style={{ flexDirection: 'row' }}>
                            <Pics.search style={styles.searchPic} />
                            <TextInput style={{ color: colors.white, marginLeft: 35, flex: 1 }} placeholder='Enter city name' placeholderTextColor={colors.white} onChangeText={(val) => setAddress(val)} cursorColor={colors.white} onSubmitEditing={getLocData}/>


                        </View>
                    </LinearGradient>

                    <TouchableOpacity onPress={getLocData}>
                        <View style={{ marginLeft: 15 }}>

                            <Pics.location />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', marginTop: 50 }}>
                    {show&& <City txt1={data?.name} txt2={forecastData?.current.condition.text} txt3={forecastData?.current.temp_c + '°'} />}
                    {!show && <Text style={{color:colors.white, fontSize:16, textAlign:'center'}}> No result found</Text>}
                    {/* <City txt1={'Mumbai'} txt2={'Rainy'}  />
                    <City txt1={'Chennai'} txt2={'Cold'}  />
                    <City txt1={'Manali'} txt2={'Snowy'}  /> */}

                </View>



            </LinearGradient>
        </ImageBackground>

    );
};

export default Search;


