import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


const SupplierDetail = ({ navigation, route }) => {

    const { productItem } = route.params;

    return (


        <Card>
            <Card.Title>{productItem.name}</Card.Title>
            <Card.Divider />
            <View style={styles.cardContent}>
                <Text>ID: {productItem?.id}</Text>
                <Text>Company Name: {productItem?.companyName}</Text>
                <Text>Contact Name: {productItem?.contactName}</Text>
                <Text>Street: {productItem?.address?.street}</Text>
                <Text>Phone : {productItem?.address?.phone}</Text>
                <Text>Country : {productItem?.address?.country}</Text>
            </View>
        </Card>)

}

const styles = StyleSheet.create({
    cardContent: {
        alignItems: 'center'
    }
})

export default SupplierDetail
