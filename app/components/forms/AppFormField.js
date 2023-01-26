import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const AppFormField = ({ name, ...props }) => {
    const {
        setFieldTouched,
        handleChange,
        errors,
        touched
    } = useFormikContext();
    return (
        <>
            <AppTextInput
                {...props}
                // autoCapitalize="none"
                // autoCorrent={false}
                // icon="email"
                // placeholder="Email"
                onBlur={() => setFieldTouched(name)}
                // keyboardType="email-address"
                // textContentType="emailAddress"
                onChangeText={handleChange(name)}
            />
            <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
        </>
    )
}

export default AppFormField
