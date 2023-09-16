import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Dashboard1 from '../screens/Dashboard1';
import Login from '../screens/Lg';
import TodoApp from '../screens/TodoApp';
import Forthscreen from '../screens/Forthscreen';
import {FirstImgDetails} from '../components/Forth_imgUI/imagesDetails';
import {SecondImgDetails} from '../components/Forth_imgUI/imagesDetails';
import {ThirdImgDetails} from '../components/Forth_imgUI/imagesDetails';
import {ForthImgDetails} from '../components/Forth_imgUI/imagesDetails';
import {FifthImgDetails} from '../components/Forth_imgUI/imagesDetails';
import WEATHER_APP from '../screens/WeatherApp/WeatherApp';

const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard1} />
        <Stack.Screen name={ROUTES.TODO_APP} component={TodoApp} />
        <Stack.Screen name={ROUTES.FORTH_SCREEN} component={Forthscreen} />
        <Stack.Screen
          name={ROUTES.FirstImgDetails}
          component={FirstImgDetails}
        />
        <Stack.Screen
          name={ROUTES.SecondImgDetails}
          component={SecondImgDetails}
        />
        <Stack.Screen
          name={ROUTES.ThirdImgDetails}
          component={ThirdImgDetails}
        />
        <Stack.Screen
          name={ROUTES.ForthImgDetails}
          component={ForthImgDetails}
        />
        <Stack.Screen
          name={ROUTES.FifthImgDetails}
          component={FifthImgDetails}
        />
        <Stack.Screen name={ROUTES.WEATHER_APP} component={WEATHER_APP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
export {RootStack};
