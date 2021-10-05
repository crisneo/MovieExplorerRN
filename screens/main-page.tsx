import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from './movie-list';
import MovieInfo from './movie-info';
import AboutPage from './about';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {getData} from '../services/storageService';

const Tab = createBottomTabNavigator();

const MainPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: 'rgb(61,51,61)',
        tabBarActiveBackgroundColor: 'rgb(61,51,61)',
        tabBarActiveTintColor: 'rgb(59,200,231)',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Search"
        component={MovieList}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSearch} size={20} style={{color: color}} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faInfo} size={20} style={{color: color}} />
          ),
        }}
      />
      <Tab.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false, //hide tab bar on this screen
        }}
      />
    </Tab.Navigator>
  );
};

export default MainPage;
