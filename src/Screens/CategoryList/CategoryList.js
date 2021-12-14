import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet  } from 'react-native'
import { Button, Card } from 'react-native-elements'

const CategoryList = ({navigation}) => {

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
                        <View style={styles.cardView}>
                        
                            <Text style={styles.cardContenty}>{item.name}</Text>
                            

                
                            <Button title='Go To Detail' onPress={() => navigation.navigate('CategoryDetail', {categoryItem : item} )} style={styles.button}/>
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
    cardView: {
        alignItems: 'center',
        
    },

    cardContenty: {
        alignItems: 'center',
        fontweight: 'bold',
        fontSize:25,
    },
})


export default CategoryList
