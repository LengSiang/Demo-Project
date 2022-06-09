import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function ContactScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contact!</Text>
        <FontAwesome name="phone" size={50} color="red" />
      </View>
    );
  }
  