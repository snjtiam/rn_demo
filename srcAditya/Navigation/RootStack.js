import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routes } from './ROUTES'; // Assuming Routes.LOGIN is a string
import Login from '../screens/Login';
import Dashboard from '../Screens/Dashboard';
import DashboardDetails from '../Screens/dashboardetails';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.LOGIN} component={Login} />
        <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
        <Stack.Screen
          name={Routes.DASHBOARDDETAILS}
          component={DashboardDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
