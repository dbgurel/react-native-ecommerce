import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


const CategoryDetail = ({ navigation, route }) => {

    const { categoryItem } = route.params;

    return (


        <Card>
            <Card.Title>{categoryItem.name}</Card.Title>
            <Card.Divider />
            <View style={styles.cardContent}>
                <Text>ID: {categoryItem?.id}</Text>
                <Text>Description: {categoryItem?.description}</Text>
                
        
            </View>
        </Card>)

}

const styles = StyleSheet.create({
    cardContent: {
        alignItems: 'center'
    }
})

export default CategoryDetail
