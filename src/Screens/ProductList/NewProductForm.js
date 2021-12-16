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
            body: JSON.stringify({ name: values.name, id: Number(values.id), unitPrice: Number(values.unitPrice), unitsInStock: Number(values.unitsInStock) })
        }

        fetch('https://northwind.vercel.app/api/products', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('Ürün başarıyla eklenmiştir.')
                setAddedProduct(() => addedProduct + 1)
            })
    }

    return (
        <Formik
            validationSchema={formValidationSchema}
            initialValues={{ id: '', unitPrice: '', name: '', unitsInStock: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        style={styles.input}
                        placeholder='Enter a name...'
                    />
                    {errors.name && <Text style={styles.errorMessage}>{errors.name}</Text>}
                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        style={styles.input}
                        placeholder='Enter an ID number...'
                    />
                    {errors.id && <Text style={styles.errorMessage}>{errors.id}</Text>}

                    <TextInput
                        onChangeText={handleChange('unitPrice')}
                        value={values.unitPrice}
                        style={styles.input}
                        placeholder='Enter a unit price value...'
                    />
                    {errors.unitPrice && <Text style={styles.errorMessage}>{errors.unitPrice}</Text>}

                    <TextInput
                        onChangeText={handleChange('unitsInStock')}
                        value={values.unitsInStock}
                        style={styles.input}
                        placeholder='Enter a stock information...'
                    />
                    {errors.unitsInStock && <Text style={styles.errorMessage}>{errors.unitsInStock}</Text>}

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
    errorMessage: {
        fontSize: 10,
        color: 'red',
        marginHorizontal:20
    }
})

export default NewProductForm
