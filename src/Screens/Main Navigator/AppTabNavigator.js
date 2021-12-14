import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from 'react-native'
import ProductList from '../ProductList/ProductList';
import { Ionicons } from '@expo/vector-icons';
import CategoryList from '../CategoryList/CategoryList';
import HomeScreen from '../Home Screen/HomeScreen';
import OrderList from '../OrderList/OrderList';
import SupplierList from '../SupplierList/SupplierList';



const Tab = createBottomTabNavigator();


const AppTabNavigator = () => {



    return (
        <Tab.Navigator>

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Anasayfa',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Products" component={ProductList} options={{

                tabBarLabel: 'Ürünler',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="gift-outline" color={color} size={size} />
                ),

            }} />

            <Tab.Screen name="Orders" component={OrderList} options={{

                tabBarLabel: 'Siparişler',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="gift-outline" color={color} size={size} />
                ),

            }} />

            <Tab.Screen name="Suppliers" component={SupplierList} options={{

                tabBarLabel: 'Tedarikçiler',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="gift-outline" color={color} size={size} />
                ),

            }} />

            <Tab.Screen name="Categories" component={CategoryList} options={{

                tabBarLabel: 'Kategoriler',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="gift-outline" color={color} size={size} />
                ),

            }} />

        </Tab.Navigator>
    )
}

export default AppTabNavigator
