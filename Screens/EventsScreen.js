import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function EventsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
        <FontAwesome name="list" size={50} color="red" />
      </View>
    );
  }
  