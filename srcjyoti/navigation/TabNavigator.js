import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoApp from '../screens/TodoApp';
import Dashboard1 from '../screens/UI/Dashboard1';
import WEATHER_APP from '../screens/WeatherApp/WeatherApp';
import WeatherAppUi from '../screens/WeatherApp/WeatherAppUi';
import {ROUTES} from './routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export function Dashboard_Todo_Tab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard1}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" color={'orange'} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 15, color: 'black'},
        }}
      />
      <Tab.Screen
        name={ROUTES.TODO_APP}
        component={TodoApp}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="note" color={'orange'} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 15, color: 'black'},
        }}
      />
    </Tab.Navigator>
  );
}

export function Weather_Tab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={ROUTES.WEATHERAPP_UI}
        component={WeatherAppUi}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="cloud-sun-rain" color={'#02ccfe'} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 15, color: 'black'},
        }}
      />
      <Tab.Screen
        name={ROUTES.WEATHER_APP}
        component={WEATHER_APP}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="cloudscale" color={'#02ccfe'} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 15, color: 'black'},
        }}
      />
    </Tab.Navigator>
  );
}
