import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'


const ProductList = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then(data => {
                setProductList(data)
            })

    }, [])

    return (
        <View>
            {
                productList && productList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View>
                            <Text>Price: {item.unitPrice}</Text>
                            <Text>Stock: {item.unitsInStock}</Text>
                        </View>
                    </Card>))
            }
        </View>
    )
}

export default ProductList
