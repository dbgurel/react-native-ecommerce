import React, { useContext, useEffect, useState,  } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Card } from 'react-native-elements'
import { Button } from 'react-native-elements'




const OrderList = ({navigation}) => {

    const [orderList, setOrderList] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/orders')
            .then((res) => res.json())
            .then(data => {
                setOrderList(data)
                setFetchStatus(true)
            })

    }, [orderList])

    return (
        <> { fetchStatus == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

        :
        <ScrollView style={styles.container}>
            <View style={styles.addButtonContainer}><Button title='Add New Order' onPress={() => navigation.navigate('NewOrderForm')} buttonStyle={styles.addButton} /></View>
            {
                orderList && orderList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.customerId}</Card.Title>
                        <Card.Divider />
                        <View  style={styles.cardContent}>
                            <Text>Freight: {item.freight}</Text>
                            <Text>Country: {item?.shipAddress?.country}</Text>
                            <Button title='Go To Detail' onPress={() => navigation.navigate('OrderDetail', {orderItem : item} )}></Button>
                            
                        </View>
                    </Card>))
            }
        </ScrollView>} </>
        
    )
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        marginTop: 8,
        alignSelf: 'center',
    }, 
    addButton: {
        width: 200,
        backgroundColor: 'tomato',
    },
    addButtonContainer: {
        width: '100%',
        marginTop: 15,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
   
})

export default OrderList
