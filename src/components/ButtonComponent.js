import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function ButtonComponent({ buttonName, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{buttonName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        width: '40%',
        borderRightColor: 'blue',
        borderLeftColor: 'blue',
        borderWidth: 5,
    },
    text: {
        color: 'white',
        fontSize: 20,
        letterSpacing: 2,
    },
});

export default ButtonComponent;