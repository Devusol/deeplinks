import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ScreenA({ route, navigation }) {

  const { params: { message }, } = route;
  console.log(navigation);

  return (
    <View style={styles.container}>

      {message && <Text style={{ margin: 20, color: "#ff0000", fontSize: 20, }}>
        Message: {message}
      </Text>}

      <Text>Screen A</Text>
      <Button
        title="Screen B"
        onPress={() => navigation.navigate('ScreenB', { message: 'Came from Screen A' })}
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
