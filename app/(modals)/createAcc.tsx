import React from 'react'
import { useNavigation, Link, router,useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView,SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import ImageView from '@/components/ImageView';

import { Pressable, Button } from "react-native";


const navHome =()=> {
    router.replace('/(tabs)/Homepage');

}


const Layout = () => {

    const router = useRouter();
    const navigation = useNavigation();

    return (



        <SafeAreaView>
            <KeyboardAvoidingView behavior="padding">
            <TextInput
                style={styles.textBox}
                    placeholder="Name"
                    placeholderTextColor = "#000"
                />
            
            <TextInput
                style={styles.textBox}
                    placeholder="Email"
                    placeholderTextColor="#000"
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
                    
            />
            <TextInput
                style={styles.textBox}          //Will make these private and censored
                    placeholder="Confirm Password"
                    placeholderTextColor="#000"
            />

            </KeyboardAvoidingView>


            <View style={styles.buttonContainer}>
                <Button color="#000"
                    title="Create Account"

                    onPress={() => router.replace("/(modals)/makeBudget")}
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
    }

});

export default Layout