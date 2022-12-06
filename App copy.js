import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './pages/SigninScreen';
import HomeScreen from './pages/Home';
import PrivateScreen from './pages/Private';
import ScreenA from './pages/ScreenA';
import ScreenB from './pages/ScreenB';
import LinkingScreen from './pages/LinkingScreen';
import * as Linking from 'expo-linking';


//const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

const isSignedIn = () => {
  //check if secure session token exists
  console.log("signin check");
  return false;
};

const config = {
  screens: {
    ScreenA: "a",
    ScreenB: "b",
  }
}

const prefix = Linking.createURL('/')

export default function App() {

  return (
    <NavigationContainer
      linking={{
        prefix: [prefix],
        config
      }}>
      <Stack.Navigator>

        {isSignedIn() ? (
        <>
          <Stack.Screen name="PrivateScreen" component={PrivateScreen} />
        </>
        ) : (
        <>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="SigninScreen" component={SigninScreen} />
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
          <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
        </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}