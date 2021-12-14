import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'


const OrderList = () => {

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
                        <View>
                            <Text>Freight: {item.freight}</Text>
                            <Text>Country: {item?.shipAddress?.country}</Text>
                            
                        </View>
                    </Card>))
            }
        </ScrollView>
    )
}

export default OrderList
