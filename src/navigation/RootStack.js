import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Login, Shisham} from '../screens';
import DashboardNavigator from './DashboardNavigtor';
import {ROUTES} from './routes';
import TodoApp from '../screens/TodoApp';
import WeatherApp from '../screens/WeatherApp';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={ROUTES.TODO_APP} component={TodoApp} />
        <Stack.Screen name={ROUTES.WEATHER_APP} component={WeatherApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
