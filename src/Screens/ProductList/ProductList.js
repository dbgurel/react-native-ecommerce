import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, TextInput, Input } from 'react-native'
import { Button, Card } from 'react-native-elements'



const ProductList = ({ navigation }) => {

    const [productList, setProductList] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [nameSortToggle, setNameSortToggle] = useState(false)
    const [priceSortToggle, setPriceSortToggle] = useState(false)

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
    const searchByName = (name) => {
        name = name.toLowerCase()
        setSearchName(name)
        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then(data => {
                var filteredProductsByName = data.filter(q => q.name.toLowerCase().includes(name))
                setProductList(filteredProductsByName)
            })
    }

    const sortProductName = () => {
        setNameSortToggle(!nameSortToggle)
        if (nameSortToggle == true) {
            let sortedProductsByName = _.orderBy(productList, ['name'], ['asc'])
            setProductList(sortedProductsByName)
        }
        else {
            let sortedProductsByName = _.orderBy(productList, ['name'], ['desc'])
            setProductList(sortedProductsByName)
        }
    }
    const sortPrice = () => {
        setPriceSortToggle(!priceSortToggle)
        if (priceSortToggle == true) {
            let sortedProductsByPrice = _.orderBy(productList, ['unitPrice'], ['asc'])
            setProductList(sortedProductsByPrice)
        }
        else {
            let sortedProductsByPrice = _.orderBy(productList, ['unitPrice'], ['desc'])
            setProductList(sortedProductsByPrice)
        }
    }


    return (
        <>
            {
                fetchStatus == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

                    : (
                        <ScrollView style={styles.container}>
                            <View style={styles.addButtonContainer}>
                                <Button title='Add New Product' onPress={() => navigation.navigate('NewProductForm')} buttonStyle={styles.addButton} />
                            </View>
                            <View style={styles.sortContainer}>
                                <Button title='Sort by Name' onPress={() => sortProductName()} buttonStyle={styles.sortButton} />
                                <Button title='Sort by Price' onPress={() => sortPrice()} buttonStyle={styles.sortButton} />
                            </View>
                            <View style={styles.searchContainer}>
                                <TextInput
                                    onChangeText={(e) => searchByName(e)}
                                    style={styles.searchInput}
                                    placeholder='Search by name...'
                                />
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
    },
    sortContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        marginHorizontal: 20,
    },
    searchContainer: {
        flex: 1,
        marginTop: 8
    },
    sortButton: {
        flex: 1,
        marginTop: 8,
        width: 150,
        backgroundColor: 'gray',
    },
    searchInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'pink',
        margin: 3,
        height: 50,
        marginHorizontal: 20
    }

})


export default ProductList
