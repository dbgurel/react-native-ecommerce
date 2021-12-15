import { Formik } from 'formik'
import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'



function NewCategoryForm({ navigation }) {

    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ id: Number(values.id), description: values.description, name: values.name, })
        }

        fetch('https://northwind.vercel.app/api/categories', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('Kategori başarıyla eklenmiştir.')
            })
    }

    return (
        <Formik
            initialValues={{ id: '', description: '', name: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an ID number...' />
                    <TextInput
                        onChangeText={handleChange('description')}
                        value={values.description}
                        style={styles.input}
                        placeholder='Enter a description...' />

                    <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        style={styles.input}
                        placeholder='Enter a name...' />









                    <Button title='Add Category to the List' onPress={handleSubmit} style={styles.button} />
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

export default NewCategoryForm
