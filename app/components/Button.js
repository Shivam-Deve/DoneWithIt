import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
export default function Button({ title, style, handlePress }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: "bold"
    }
})