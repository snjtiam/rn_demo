import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ROUTES } from './routes';
import Login from '../screens/Lg';
import Dashboard1 from '../screens/Dashboard1';
const Tab = createBottomTabNavigator();

function JyotiTab() {                                              
  return (
    <Tab.Navigator>
     
      <Tab.Screen name="Home" component={Login} />
      <Tab.Screen name="Dash" component={Dashboard1} />
      {/* <Tab.Screen name={ROUTES.LOGIN} component={Login} />
      <Tab.Screen name={ROUTES.DASHBOARD} component={Dashboard1} /> */}
      
    </Tab.Navigator>
  );
}
 
export default JyotiTab;



