import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from './screens/movie-list';
import MovieInfo from './screens/movie-info';
import AboutPage from './screens/about';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import LanguageSelect from './screens/language-select';
import MainPage from './screens/main-page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Language"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Language" component={LanguageSelect} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
