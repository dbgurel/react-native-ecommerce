import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'


const CategoryList = () => {

    const [CategoryList, setCategoryList] = useState([])

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/categories')
            .then((res) => res.json())
            .then(data => {
                setCategoryList(data)
            })

    }, [])

    return (
        <ScrollView>
            {
                CategoryList && CategoryList.map((item, key) => (
                    <Card key={key}>
                        <Card.Title>{item.key}</Card.Title>
                        <Card.Divider />
                        <View>
                            <Text>Description: {item.description}</Text>
                            <Text>Name: {item.name}</Text>
                        </View>
                    </Card>))
            }
        </ScrollView>
    )
}

export default CategoryList
