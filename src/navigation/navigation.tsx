import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Splash from '../screens/splash';
import DetailsScreen from '../screens/detailsScreen';
import SwiperComponent from '../screens/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pics } from '../assets/images';
import Search from '../screens/search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import colors from '../assets/colors';
import routes from '../assets/routes';

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
        screenOptions={{ header: () => null }}>
        <TabNav.Screen component={Home} name='Home' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View >
                <MaterialCommunityIcons
                  name="home"
                  size={30}
                  color={colors.purple}
                />
              </View>
            ) : (
              <View>
                <MaterialCommunityIcons
                  name="home"
                  size={30}
                  color={colors.white}
                />
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.lpurple,
            position: 'absolute',
            height: 65,
            bottom: 10,
            right: 20,
            left: 20,
            borderRadius: 15,
            paddingHorizontal: 10,
            opacity: 0.6
          },
        }}
        />
        <TabNav.Screen name='detailsScreen' component={DetailsScreen} options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View >
                <MaterialCommunityIcons
                  name="weather-cloudy"
                  size={30}
                  color={colors.purple}
                />
              </View>
            ) : (
              <View>
                <MaterialCommunityIcons
                  name="weather-cloudy"
                  size={30}
                  color={colors.white}
                />
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.lpurple,
            position: 'absolute',
            height: 65,
            bottom: 10,
            right: 20,
            left: 20,
            borderRadius: 15,
            paddingHorizontal: 10,
            opacity: 0.6
          },
        }} />
        <TabNav.Screen component={Search} name='Search' options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View >
                <MaterialCommunityIcons
                  name="magnify"
                  size={30}
                  color={colors.purple}
                />
              </View>
            ) : (
              <View>
                <MaterialCommunityIcons
                  name="magnify"
                  size={30}
                  color={colors.white}
                />
              </View>
            ),
          tabBarStyle: {
            backgroundColor: colors.lpurple,
            position: 'absolute',
            height: 65,
            bottom: 10,
            right: 20,
            left: 20,
            borderRadius: 15,
            paddingHorizontal: 10,
            opacity: 0.6
          },
        }} />
      </TabNav.Navigator>
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? <Stack.Screen name={routes.splash.path} component={Splash} options={{ headerShown: false }} /> : null}
        {onboard?<Stack.Screen name={routes.SwiperComponent.path} component={SwiperComponent} options={{headerShown: false}} />:null}
        <Stack.Screen name={routes.Dashboard.path} component={DashboardNavigation} options={{ headerShown: false }} />

        {/* <Stack.Screen name='Home' component={Home} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;
