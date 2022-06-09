import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
        <FontAwesome name="list" size={50} color="red" />
      </View>
    );
  }

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="EventsHome" component={EventsScreen}/>
      </Stack.Navigator>
    )
  }
  