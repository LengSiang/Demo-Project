import * as React from "react";
import { Text, View, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function EventsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events first screen!</Text>
      <FontAwesome name="list" size={50} color="red" />
      <Button
        title="Go to second screen"
        onPress={() => {
          navigation.navigate("EventsSecondScreen");
        }}
      />
    </View>
  );
}

function EventsSecondScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <Text>Events second screen!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
