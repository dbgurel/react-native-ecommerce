import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'


const OrderList = () => {

    const [OrderList, setOrderList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then(data => {
                setOrderList(data)
            })

    }, [])

    return (
        <View>
            {
                OrderList && OrderList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View>
                            <Text>ShipName: {item.ShipName}</Text>
                            
                        </View>
                    </Card>))
            }
        </View>
    )
}

export default OrderList
