import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import JugadoresScreen from '../screens/JugadoresScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Jugadores'>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
      <Tab.Screen name='Jugadores' component={JugadoresScreen} />
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
