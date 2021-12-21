import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card } from 'react-native-elements'

const SupplierList = ({ navigation }) => {

    const [supplierList, setSupplierList] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)
    const [searchcompanyName, setSearchcompanyName] = useState('')
    const [companynameSortToggle, setcompanyNameSortToggle] = useState(false)
    const [idSortToggle, setIdSortToggle] = useState(false)
    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers/')
            .then((res) => res.json())
            .then(data => {
                setSupplierList(data)
                setFetchStatus(true)
            })

    }, [])
    useEffect(() => {
        getSuppliers()
    }, [])

    const getSuppliers = () => {
        fetch('https://northwind.vercel.app/api/suppliers/')
        .then((res) => res.json())
        .then((data) => {
            setSupplierList(data);
        })
    } 
    const deleteSupplier = (id) => {
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch('https://northwind.vercel.app/api/suppliers/' + id, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            getSuppliers();
        })


    }
    const searchBycompanyName = (companyName) => {
        companyName = companyName.toLowerCase()
        setSearchcompanyName(companyName)
        fetch('https://northwind.vercel.app/api/suppliers/')
            .then((res) => res.json())
            .then(data => {
                var filteredProductsBycompanyName = data.filter(q => q.companyName.toLowerCase().includes(companyName))
                setProductList(filteredProductsBycompanyName)
            })
    }

    const sortSuppliersName = () => {
        setcompanyNameSortToggle(!companynameSortToggle)
        if (companynameSortToggle == true) {
            let sortedProductsBycompanyName = _.orderBy(productList, ['companyname'], ['asc'])
            setProductList(sortedProductsBycompanyName)
        }
        else {
            let sortedProductsBycompanyName = _.orderBy(productList, ['companyname'], ['desc'])
            setProductList(sortedProductsBycompanyName)
        }
    }
    const sortid = () => {
        setIdSortToggle(!idSortToggle)
        if (idSortToggle == true) {
            let sortedProductsById = _.orderBy(productList, ['Id'], ['asc'])
            setProductList(sortedProductsById)
        }
        else {
            let sortedProductsById = _.orderBy(productList, ['Id'], ['desc'])
            setProductList(sortedProductsById)
        }
    }


    return (

        <> {
            fetchStatus == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

                : (
                    <ScrollView style={styles.container}>
                        <View style={styles.addButtonContainer}>
                            <Button title='Add New Product' onPress={() => navigation.navigate('NewProductForm')} buttonStyle={styles.addButton} />
                        </View>
                        <View style={styles.sortContainer}>
                                <Button title='Sort by Company Name' onPress={() => sortSuppliersName()} buttonStyle={styles.sortButton} />
                                <Button title='Sort by Id' onPress={() => sortid()} buttonStyle={styles.sortButton} />
                            </View>
                            <View style={styles.searchContainer}>
                                <TextInput
                                    onChangeText={(e) => searchBycompanyName(e)}
                                    style={styles.searchInput}
                                    placeholder='Search by Comapny Name...'
                                />
                            </View>
                        {
                            supplierList && supplierList.map((item, key) => (
                                <Card key={key}>
                                    <Card.Title>{item.companyName}</Card.Title>
                                    <Card.Divider />
                                    <View style={styles.cardContent}>
                                        <Text>Id: {item.id}</Text>
                                        <Text>Contact Name: {item.contactName}</Text>
                                        <Button title='Go To Detail' onPress={() => navigation.navigate('ProductDetail', { productItem: item })} style={styles.button} />
                                        <Button title='Delete This Item' onPress={()=> deleteSupplier(item.id)} style={styles.button}/>
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


export default SupplierList