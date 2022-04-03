import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonComponent from '../components/ButtonComponent';
import { addMessage } from '../database/messageDatabase.utils';

function FormScreen({ route }) {
    const { car } = route.params;

    const [fName, onChangefNameText] = useState();
    const [lName, onChangelNameText] = useState();
    const [phone, onChangePhone] = useState();
    const [email, onChangeEmail] = useState();
    const [other, onChangeOther] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <StatusBar
                    barStyle="light-content"
                    translucent={false}
                    backgroundColor="#222130"
                />

                <Text style={styles.text}>Ask about {car.brand}!</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: car.image,
                    }}
                />
                <Text style={styles.smallerText}>Fill the form below and we'll get in touch</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangefNameText(text)}
                    value={fName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangelNameText(text)}
                    value={lName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangePhone(text)}
                    value={phone}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangeEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.textArea}
                    placeholder="Fill here if you have any additional comments or questions for us"
                    placeholderTextColor='#878787'
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={text => onChangeOther(text)}
                    value={other}
                />
                <ButtonComponent
                    buttonName="SUBMIT"
                    onPress={() => { addMessage({
                        fName: fName,
                        lName: lName,
                        phone: phone,
                        email: email,
                        other: other,
                        car: car
                    })}}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
    },
    scrollContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        color: 'white',
        width: '80%',
        height: 40,
        borderRightColor: 'blue',
        borderLeftColor: 'blue',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
        margin: 10,
        textAlign: 'left',
    },
    smallerText: {
        color: 'white',
        fontSize: 18,
        margin: 10,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
    },
    textArea: {
        width: '80%',
        color: 'white',
        borderRightColor: 'blue',
        borderLeftColor: 'blue',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        height: 150,
    },
    image: {
        marginTop: 15,
        height: 160,
        width: '80%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
    },
});

export default FormScreen;