import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Splash from '../screens/splash';
import DetailsScreen from '../screens/detailsScreen';
import Players from '../screens/players';
import SwiperComponent from '../screens/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabNav = createBottomTabNavigator();

const AppNav = () => {

  const [onboard, setOnboard] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('onboardKey').then(value => {
      if (value) {
        console.log('onboard set to false');
        setOnboard(false);
      } else {
        AsyncStorage.setItem('onboardKey', 'abc');
      }
    });
  }, []);





  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const DashboardNavigation = () => {
    return (
      <TabNav.Navigator
        screenOptions={{header: () => null}}>
        <TabNav.Screen
          component={Home}
          name='Home'
        />
        <TabNav.Screen name='detailsScreen' component={DetailsScreen} options={{headerShown: false}} />
        
      </TabNav.Navigator>
    );
  };
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  }, [])

  return (
    <NavigationContainer>
        {/* <TabNav.Navigator screenOptions={{headerShown: false}}>
        <TabNav.Screen component={Home} name={"Home"} />
        <TabNav.Screen component={DetailsScreen} name='DetailScreen'/>
        </TabNav.Navigator> */}
        <Stack.Navigator>
        {isLoading ?  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> : null }
        {onboard?<Stack.Screen name='SwiperComponent' component={SwiperComponent} options={{headerShown: false}} />:null}
        {/* <Stack.Screen name='SwiperComponent' component={SwiperComponent} options={{headerShown: false}} /> */}


        <Stack.Screen name='DashboardNavigation' component={DashboardNavigation} options={{headerShown: false}} />
        
        {/* <Stack.Screen name='Home' component={Home} options={{headerShown: false}} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;
