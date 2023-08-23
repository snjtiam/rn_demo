import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, Shisham} from '../screens';

const Tab = createBottomTabNavigator();

function DashboardNavigator({route}) {
  return (
    <Dashboard />
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Dashboard}  />
    //   <Tab.Screen name="Shisham" component={Shisham} />
    // </Tab.Navigator>
  );
}

export default DashboardNavigator;
