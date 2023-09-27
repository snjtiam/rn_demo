import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Login from '../screens/Lg';
import {Dashboard_Todo_Tab} from './TabNavigator';
import {Weather_Tab} from './TabNavigator';
import WeatherDetail from '../screens/WeatherApp/WeatherDetail';
import DestinationUi_Header from '../screens/UI/DestinationUi_Header';
import DestnationDetail from '../screens/UI/DestnationDetail';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.DASHBOARD_TODO_TAB} component={Dashboard_Todo_Tab} />
        <Stack.Screen name={ROUTES.DESTINATION_UI} component={DestinationUi_Header} />
        <Stack.Screen name={ROUTES.DESTINATION_DETAIL} component={DestnationDetail} />
        <Stack.Screen name={ROUTES.WEATHER_TAB} component={Weather_Tab} />
        <Stack.Screen name={ROUTES.WEATHER_DETAIL} component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
