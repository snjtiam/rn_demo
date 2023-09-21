import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Dashboard1 from '../screens/UI/Dashboard1';
import Login from '../screens/Lg';
import TodoApp from '../screens/TodoApp';
import Forthscreen from '../screens/Forthscreen';
import WEATHER_APP from '../screens/WeatherApp/WeatherApp';
import DestnationDetail from '../screens/UI/DestnationDetail';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard1} />
        <Stack.Screen name={ROUTES.TODO_APP} component={TodoApp} />
        <Stack.Screen name={ROUTES.FORTH_SCREEN} component={Forthscreen} />
        <Stack.Screen name={ROUTES.WEATHER_APP} component={WEATHER_APP} />
        <Stack.Screen name={ROUTES.DESTINATION_DETAIL} component={DestnationDetail} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
