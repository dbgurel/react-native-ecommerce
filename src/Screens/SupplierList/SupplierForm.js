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
            body: JSON.stringify({ companyName: values.companyName, id: Number(values.id), contactName: (values.contactName), contactTitle: (values.contactTitle) })
        }

        fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('Ürün başarıyla eklenmiştir.')
            })
    }

    return (
        <Formik
            initialValues={{ companyName: '', id: '', contactName: '', contactTitle: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('companyName')}
                        value={values.companyName}
                        style={styles.input}
                        placeholder='Enter a companyName...'
                    />

                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an ID number...'
                    />

                    <TextInput
                        onChangeText={handleChange('contactName')}
                        value={values.contactName}
                        style={styles.input}
                        placeholder='Enter a Contact Name...'
                    />

                    <TextInput
                        onChangeText={handleChange('contactTitle')}
                        value={values.contactTitle}
                        style={styles.input}
                        placeholder='Enter a Contact Title...'
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
