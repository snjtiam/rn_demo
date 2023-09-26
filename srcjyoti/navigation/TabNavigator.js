import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoApp from '../screens/TodoApp';
import Dashboard1 from '../screens/UI/Dashboard1';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { ROUTES } from './routes';

function JyotiTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTES.DASHBOARD} component={Dashboard1}  
      options={{
          tabBarIcon: () => (
            <FontAwesome name="home" color={'orange'} size={30} />
          ),
          tabBarLabelStyle:{fontSize:15, color:'black'}
        }} />
      <Tab.Screen name={ROUTES.TODO_APP} component={TodoApp}
      options={{
        tabBarIcon: () => (
          <SimpleLineIcons name="note" color={'orange'} size={30} />
        ),
        tabBarLabelStyle:{fontSize:15, color:'black'}
      }} />
      {/* <Tab.Screen name={ROUTES.LOGIN} component={Login} />
      <Tab.Screen name={ROUTES.DASHBOARD} component={Dashboard1} /> */}
    </Tab.Navigator>
  );
}

export default JyotiTab;
