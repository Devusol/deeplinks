import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const AuthContext = React.createContext();
import * as Linking from 'expo-linking';

const signIn = (user) => {
  console.log(user)
  console.log(Linking.createURL())
}

export default function SigninScreen({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);
  const url = Linking.useURL();
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
      <Button title="Screen A" onPress={() => navigation.navigate("ScreenA", { message: 'Came from Siginin Screen' })} />

      <Text>URL: {url}</Text>
    </View>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
