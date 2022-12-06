import React from "react";
import { View, TouchableOpacity, Text, Button} from "react-native";
import * as Linking from 'expo-linking';

export default function LinkingScreen({ navigation }) {

  const Url_A = "deeplinkingapp://app/a";
  const Url_B = "deeplinkingapp://app/b/come-from-url";
  const Url_C = "https://app.example.com";

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_A)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_B)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenB
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_C)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenC
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL("https://reactnative.dev/")}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Open public Url
        </Text>
      </TouchableOpacity>
      <Button
        title="Home"
        onPress={() => navigation.navigate('SigninScreen')}
      />
    </View>
  );
}