import { Text } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const url = Linking.useURL();
  let data;

  if (url) {
    const { hostname, path, queryParams } = Linking.parse(url);
    //setData(queryParams);
    console.log(
      `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );
    data = queryParams;
  }

  return (
    <Text style={{ marginTop: "100%" }}>{data ? JSON.stringify(data) : "App not opened from deeplink"}</Text>
  );
}