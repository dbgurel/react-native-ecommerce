import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card } from 'react-native-elements'

const SupplierList = ({ navigation }) => {

    const [supplierList, setSupplierList] = useState([])
    const [fetchStatus, setFetchStatus] = useState(false)
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
    return (

        <> {
            fetchStatus == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

                : (
                    <ScrollView style={styles.container}>
                        <View style={styles.addButtonContainer}><Button title='Add New Product' onPress={() => navigation.navigate('NewProductForm')} buttonStyle={styles.addButton} />
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
    }
})


export default SupplierList