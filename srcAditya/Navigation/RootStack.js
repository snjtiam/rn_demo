import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Details1 from '../Componments/Details1';
import {ROUTES} from './ROUTES';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={ROUTES.DETAILS1} component={Details1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
