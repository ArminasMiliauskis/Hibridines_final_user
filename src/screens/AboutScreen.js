import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

function AboutScreen() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
            <Text style={styles.textBigger}>Auto is JAV aukcionai!</Text>
            <View style={styles.mainTextArea}>
                <Text style={styles.text}>Programėlė skirta surasti svajonių automobilį, pigiau, tiesiai iš Amerikos</Text>
                <Text style={styles.text}>Radus norimą automobilį užsiregistruokite aukcionui ir laukite kol su jumis susisieks!</Text>
                <Text style={styles.text}>Skelbimai yra kasdien atnaujinami</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222130',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTextArea: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textBigger: {
        color: 'white',
        fontSize: 24,
    },
    textSmaller: {
        color: 'white',
        fontSize: 14,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default AboutScreen;