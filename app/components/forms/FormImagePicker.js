import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'

const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    const handleAdd = uri => {
        setFieldValue(name, [...values[name], uri])
    }
    const handleRemove = uri => {
        setFieldValue(name, values[name].filter(e => e !== uri))
    }
    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
        </>
    )
}

export default FormImagePicker

const styles = StyleSheet.create({})