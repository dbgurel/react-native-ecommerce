import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'


const SupplierList = () => {

    const [supplierList, setSupplierList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then(data => {
                setSupplierList(data)
            })

    }, [])

    return (
        <View>
            {
                supplierList && supplierList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View>
                            <Text>Price: {item.companyName}</Text>
                            <Text>Stock: {item.contactName}</Text>
                        </View>
                    </Card>))
            }
        </View>
    )
}

export default SupplierList
