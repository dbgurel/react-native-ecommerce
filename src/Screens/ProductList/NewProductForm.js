import { Formik } from 'formik'
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'



const NewProductForm = ({ navigation }) => {

    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: values.name, id: Number(values.id), unitPrice: Number(values.unitPrice), unitsInStock: Number(values.unitsInStock) })
        }

        fetch('https://northwind.vercel.app/api/products', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('Ürün başarıyla eklenmiştir.')
            })
    }

    return (
        <Formik
            initialValues={{ id: '', unitPrice: '', name: '', unitsInStock: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        style={styles.input}
                        placeholder='Enter a name...'
                    />

                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an ID number...'
                    />

                    <TextInput
                        onChangeText={handleChange('unitPrice')}
                        value={values.unitPrice}
                        style={styles.input}
                        placeholder='Enter a unit price value...'
                    />

                    <TextInput
                        onChangeText={handleChange('unitsInStock')}
                        value={values.unitsInStock}
                        style={styles.input}
                        placeholder='Enter a stock information...'
                    />

                    <Button title='Add Product to the List' onPress={handleSubmit} style={styles.button} />
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

export default NewProductForm
