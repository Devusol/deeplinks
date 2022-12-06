import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({navigation}) {

      
  return (
    <View style={styles.container}>
      <Text>Home Screen! Public Route</Text>
      <Button
        title="Try to navigate without session"
        onPress={() => navigation.navigate('PrivateScreen')}
      />
      <Text>Login Here with Social</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
