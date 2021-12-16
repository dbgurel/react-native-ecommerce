import { Formik } from 'formik'
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'



const NewOrderForm = ({ navigation }) => {

    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ customerId: values.customerId, orderDate: Number(values.orderDate), freight: Number(values.freight), shipName: (values.shipName) })
        }

        fetch('https://northwind.vercel.app/api/orders', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('Ürün başarıyla eklenmiştir.')
            })
    }

    return (
        <Formik
            initialValues={{ customerId: '', orderDate: '', freight: '', shipName: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('customerId')}
                        value={values.name}
                        style={styles.input}
                        placeholder='Enter a customerId...'
                    />

                    <TextInput
                        onChangeText={handleChange('orderDate')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an orderDate...'
                    />

                    <TextInput
                        onChangeText={handleChange('freight')}
                        value={values.unitPrice}
                        style={styles.input}
                        placeholder='Enter a freight...'
                    />

                    <TextInput
                        onChangeText={handleChange('shipName')}
                        value={values.unitsInStock}
                        style={styles.input}
                        placeholder='Enter a shipName...'
                    />

                    <Button title='Add order to the List' onPress={handleSubmit} style={styles.button} />
                </View>
            )}
        </Formik>
    )
}



const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'pink',
        margin: 3,
        height: 50,
        marginHorizontal: 20
    },
    button: {
        marginHorizontal: 20,
        margin: 5,
        borderRadius: 20,
    }
})

export default NewOrderForm
