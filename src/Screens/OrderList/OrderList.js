import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { Button } from 'react-native-elements'




const OrderList = ({navigation}) => {

    const [orderList, setOrderList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/orders')
            .then((res) => res.json())
            .then(data => {
                setOrderList(data)
            })

    }, [])

    return (
        <ScrollView>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        marginTop:8
    },
    cardContent: {
        alignItems: 'center'
    }
})

export default OrderList
