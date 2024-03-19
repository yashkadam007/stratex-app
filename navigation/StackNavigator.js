import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import AddBookScreen from "../screens/AddBookScreen";
import UpdateBookScreen from "../screens/UpdateBookScreen";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator(); //Navigation before login
  const InsideStack = createNativeStackNavigator(); // Navigation after login
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  function InsideLayout() {
    return (
      <InsideStack.Navigator>
        <InsideStack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            headerShown: false,
          }}
        />
        <InsideStack.Screen
          name="BookDetailScreen"
          component={BookDetailScreen}
          options={{ headerShown: true }}
        />
        <InsideStack.Screen
          name="AddBookScreen"
          component={AddBookScreen}
          options={{ headerShown: true }}
        />
        <InsideStack.Screen
          name="UpdateBookScreen"
          component={UpdateBookScreen}
          options={{ headerShown: true }}
        />
      </InsideStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
