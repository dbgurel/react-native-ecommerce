import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from './src/Screens/ProductList/ProductList';
import CategoryList from './src/Screens/CategoryList/CategoryList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './src/Screens/Main Navigator/AppTabNavigator';
import OrderList from './src/Screens/OrderList/OrderList';
import SupplierList from './src/Screens/SupplierList/SupplierList';
import HomeScreen from './src/Screens/Home Screen/HomeScreen';
import ProductDetail from './src/Screens/ProductList/ProductDetail';
import NewProductForm from './src/Screens/ProductList/NewProductForm';
import CategoryDetail from './src/Screens/CategoryList/CategoryDetail';
import NewCategoryForm from './src/Screens/CategoryList/NewCategoryForm';
import OrderDetail from './src/Screens/OrderList/OrderDetail';
<<<<<<< HEAD
import NewOrderForm from './src/Screens/OrderList/NewOrderForm';

=======
import { ProductProvider } from './src/context/ProductContext';
>>>>>>> 6a152c081aa70c53bc0cad19aa22d960ee581720


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <ProductProvider>

      <NavigationContainer>

<<<<<<< HEAD
        <Stack.Screen name='AppTabNavigator' component={AppTabNavigator} options={{headerShown:false}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{title:'Home Screen'}} />
        <Stack.Screen name='ProductList' component={ProductList} />
        <Stack.Screen name='OrderList' component={OrderList} />
        <Stack.Screen name='SupplierList' component={SupplierList} />
        <Stack.Screen name='CategoryList' component={CategoryList} />
        <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
        <Stack.Screen name='NewProductForm' component={NewProductForm} options={{title:'Add a New Product'}} />
        <Stack.Screen name='NewCategoryForm' component={NewCategoryForm} options={{title:'Add a New Category'}} />
        <Stack.Screen name='OrderDetail' component={OrderDetail} />
        <Stack.Screen name='NewOrderForm' component={NewOrderForm} options={{title:'Add a New Category'}} />
=======
        <Stack.Navigator initialRouteName='AppTabNavigator'>
>>>>>>> 6a152c081aa70c53bc0cad19aa22d960ee581720

          <Stack.Screen name='AppTabNavigator' component={AppTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }} />
          <Stack.Screen name='ProductList' component={ProductList} />
          <Stack.Screen name='OrderList' component={OrderList} />
          <Stack.Screen name='SupplierList' component={SupplierList} />
          <Stack.Screen name='CategoryList' component={CategoryList} />
          <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
          <Stack.Screen name='ProductDetail' component={ProductDetail} />
          <Stack.Screen name='NewProductForm' component={NewProductForm} options={{ title: 'Add a New Product' }} />
          <Stack.Screen name='NewCategoryForm' component={NewCategoryForm} options={{ title: 'Add a New Category' }} />
          <Stack.Screen name='OrderDetail' component={OrderDetail} />



        </Stack.Navigator>

      </NavigationContainer>
    </ProductProvider>

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
