import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { Button, Card } from 'react-native-elements'



const ProductList = ({ navigation }) => {

    const [productList, setProductList] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = () => {
        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then(data => {
                setProductList(data)
                setFetchStatus(true)
            })
    }

    const deleteProduct = (id) =>
        Alert.alert('Are you sure to delete this product?', 'bla bla',
            [
                {
                    text: 'Yes',
                    onPress: () => {

                        setFetchStatus(false)

                        const requestOptions = {
                            method: 'DELETE',
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json'
                            }
                        }
                        fetch('https://northwind.vercel.app/api/products/' + id, requestOptions)
                            .then((res) => res.json())
                            .then(data => {
                                getProducts()
                            })
                    }
                },
                {
                    text: 'No',
                    onPress: () => { }
                }])



    return (
        <>
            {
                fetchStatus == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

                    : (
                        <ScrollView style={styles.container}>
                            <View style={styles.addButtonContainer}>
                                <Button title='Add New Product' onPress={() => navigation.navigate('NewProductForm')} buttonStyle={styles.addButton} />
                            </View>

                            {


                                productList && productList.map((item, key) => (
                                    <Card key={key}>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Divider />
                                        <View style={styles.cardContent}>
                                            <Text>Price: {item.unitPrice}</Text>
                                            <Text>Stock: {item.unitsInStock}</Text>
                                            <Button title='Go To Detail' onPress={() => navigation.navigate('ProductDetail', { productItem: item })} style={styles.button} />
                                            <Button title='Delete Product' onPress={() => deleteProduct(item.id)} style={styles.button} />
                                        </View>
                                    </Card>))
                            }
                        </ScrollView>
                    )
            }
        </>

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
        flex: 1,
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


export default ProductList
