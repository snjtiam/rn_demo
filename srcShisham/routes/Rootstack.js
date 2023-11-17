import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ROUTES } from './ROUTES';
import Header from '../components/Header';
import WeatherUI from '../screens/WeatherUI';
import WeatherScreen from '../screens/WeatherScreen';
import Login from '../screens/Login';
const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.HEADER} component={Header} />
       
        <Stack.Screen name={ROUTES.WEATHER_SCREEN} component={WeatherScreen} />
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
