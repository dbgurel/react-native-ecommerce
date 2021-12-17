import { Formik } from 'formik'
import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import ProductContext from '../../context/ProductContext'
import * as yup from 'yup'
import { string } from 'yup/lib/locale'


const NewProductForm = ({ navigation }) => {
    const { addedProduct, setAddedProduct } = useContext(ProductContext)

    const formValidationSchema = yup.object().shape({
        name: yup.string()
            .required('Name is required'),

        id: yup.number()
            .required('ID is required'),

        unitPrice: yup.number()
            .required('Price is required'),

        unitsInStock: yup.number()
            .required('Stock information is required')
    })


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
                     {errors.companyName && <Text style={styles.errorMessage}>{errors.companyName}</Text>}
                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an ID number...'
                    />
                     {errors.id && <Text style={styles.errorMessage}>{errors.id}</Text>}
                    <TextInput
                        onChangeText={handleChange('contactName')}
                        value={values.contactName}
                        style={styles.input}
                        placeholder='Enter a Contact Name...'
                    />
                     {errors.contactName && <Text style={styles.errorMessage}>{errors.contactName}</Text>}
                    <TextInput
                        onChangeText={handleChange('contactTitle')}
                        value={values.contactTitle}
                        style={styles.input}
                        placeholder='Enter a Contact Title...'
                    />
                     {errors.contactTitle && <Text style={styles.errorMessage}>{errors.contactTitle}</Text>}
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
    },
    errorMessage:{
        fontSize:10,
        color:'red',
        marginHorizontal:20
    }
})

export default NewProductForm
