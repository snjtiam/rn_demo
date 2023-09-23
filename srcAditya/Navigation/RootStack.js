import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes"; // Assuming Routes.LOGIN is a string
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";
import DashboardDetails from "../screens/dashboardetails";

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.LOGIN} component={Login}/>
        <Stack.Screen name={Routes.DASHBOARD} component={Dashboard}/>
        <Stack.Screen name={Routes.DASHBOARDDETAILS} component={DashboardDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

