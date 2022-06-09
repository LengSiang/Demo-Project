import React from "react";
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import { NavigationContrainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <FontAwesome name="home" size={50} color="red" />
      </View>
    );
  }