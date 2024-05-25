import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Registro'>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />

    </Tab.Navigator>
  );
}

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>

        </NavigationContainer>
    )
} 
