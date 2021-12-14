import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet  } from 'react-native'
import { Button, Card } from 'react-native-elements'

const SupplierList = ({navigation}) => {

    const [supplierList, setSupplierList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then(data => {
                setSupplierList(data)
            })

    }, [])

    return (
        <ScrollView>
            {
                supplierList && supplierList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider />
                        <View style={styles.cardContent}>
                            <Text>Company Name: {item.companyName}</Text>
                            <Text>Contact Name: {item.contactName}</Text>
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


export default SupplierList