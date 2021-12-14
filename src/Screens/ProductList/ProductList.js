import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet  } from 'react-native'
import { Button, Card } from 'react-native-elements'

const ProductList = ({navigation}) => {

    const [productList, setProductList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then(data => {
                setProductList(data)
            })

    }, [])

    return (
        <ScrollView>
            {
                productList && productList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View style={styles.cardContent}>
                            <Text>Price: {item.unitPrice}</Text>
                            <Text>Stock: {item.unitsInStock}</Text>
                            <Button title='Go To Detail' onPress={() => navigation.navigate('ProductDetail', {productItem : item} )} style={styles.button}/>
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


export default ProductList
