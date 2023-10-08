import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ROUTES } from './ROUTES';
import Header from '../components/Header';
const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HEADER} component={Header} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
