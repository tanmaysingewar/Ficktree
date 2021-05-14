import React from 'react'
import { StyleSheet, StatusBar} from 'react-native';
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from './navigation/tabs';
import { COLORS } from './constants';

const theme = { 
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      border: "transperant"
    }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} animated={true}  />
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}
          initialRouteName={'Home'}
        >
          {/* All screens should be added here */}
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Notification" component={Tabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
