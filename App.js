import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from './src/Screens/ProductList/ProductList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './src/Screens/Main Navigator/AppTabNavigator';





export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='AppTabNavigator'>

        <Stack.Screen name='AppTabNavigator' component={AppTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Home Screen'}} />
        <Stack.Screen name='ProductList' component={ProductList} />
        <Stack.Screen name='OrderList' component={OrderList} />
        <Stack.Screen name='SupplierList' component={SupplierList} />
        <Stack.Screen name='CategoryList' component={CategoryList} />



      </Stack.Navigator>
      <ProductList></ProductList>

    </NavigationContainer>
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
