import React from 'react'
import { useNavigation, Link, router, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import ImageView from '@/components/ImageView';
import { useState } from 'react'
import { Pressable, Button } from "react-native";

import { db, auth } from '@/app/index';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const togglePass = () => {

    const [password, setPassword] = useState(true);
    const [textState, setTextState] = useState("Show Password");

    const handlePasswordVisibility = () => {

        if (textState === "Show Password") {

            setTextState("Hide Password");

            setPassword(!password);

        } else if (textState === "Hide Password") {

            setTextState("Show Password");

            setPassword(!password);

        }

    };


    return {

        password,

        textState,

        handlePasswordVisibility

    }

}

export var userID: any;

const moveToBudget = () => {

    router.replace("/(tabs)/Homepage")

}


export const Layout = () => {

    

    const handleSignUp = async () => {
        auth
        createUserWithEmailAndPassword(auth, Semail, Spasswords)


            .then((userCredential) => {

                const user = userCredential.user;


                setDoc(doc(db, "user", user.uid), {
                    name: name,
                    email: user.email,
                    amount: ""
                });
                userID = user.uid



            })
            .catch(error => alert(error.message))


    }




    const { password, textState, handlePasswordVisibility } = togglePass();
    const [Spasswords, setPasswords] = useState('');
    const [Semail, setEmail] = useState('');
    const [name, setName] = useState('');



    return (

        <SafeAreaView>
            <KeyboardAvoidingView behavior="padding">
                <TextInput
                    style={styles.textBox}
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholderTextColor="#000"
                />

                <TextInput
                    style={styles.textBox}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    value={Semail}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.textBox}
                    placeholder="Confirm Email"
                    placeholderTextColor="#000"

                />
                <TextInput
                    style={styles.textBox}          //Will make these private and censored

                    placeholder="Password"
                    placeholderTextColor="#000"
                    secureTextEntry={password}
                    value={Spasswords}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPasswords(text)}

                />
                <View style={styles.passContainer}>
                    <Pressable onPress={handlePasswordVisibility}>

                        <Text>{textState}</Text>

                    </Pressable>

                </View>

                <TextInput
                    style={styles.textBox}          //Will make these private and censored
                    placeholder="Confirm Password"
                    placeholderTextColor="#000"
                    secureTextEntry={true}


                />



            </KeyboardAvoidingView>


            <View style={styles.buttonContainer}>
                <Button color="#000"
                    title="Create Account"

                    onPress={() => { handleSignUp(); moveToBudget(); }}


                />

            </View>



        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    imageContainer: {
        flex: 1,
        paddingTop: 40,
    },

    welcomeText: {
        textAlign: 'center',
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 26,
        fontWeight: 'bold'
    },
    defaultText: {
        textAlign: 'center',
        paddingBottom: 50

    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,

    },
    textBox: {
        height: 45,
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10

    },

    buttonContainer: {
        backgroundColor: '#3383CD',

        width: 320,
        height: 68,
        borderRadius: 15,
        margin: 50,
        marginHorizontal: 35,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        paddingLeft: 10,
    },
    button: {
        color: "#000"
    },
    passContainer: {

        paddingLeft: 20,

    },

});

export default Layout