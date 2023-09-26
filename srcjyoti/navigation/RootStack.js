import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Login from '../screens/Lg';
import JyotiTab from './TabNavigator';
import Forthscreen from '../screens/Forthscreen';
import DestnationDetail from '../screens/UI/DestnationDetail';
import WEATHER_APP from '../screens/WeatherApp/WeatherApp';
import WeatherDetail from '../screens/WeatherApp/WeatherDetail';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.TAB} component={JyotiTab} />
        <Stack.Screen name={ROUTES.FORTH_SCREEN} component={Forthscreen} />
        <Stack.Screen name={ROUTES.DESTINATION_DETAIL} component={DestnationDetail} /> 
        <Stack.Screen name={ROUTES.WEATHER_APP} component={WEATHER_APP} />
        <Stack.Screen name={ROUTES.WEATHER_DETAIL} component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
