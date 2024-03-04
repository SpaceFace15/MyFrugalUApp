
import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';

const introImage = require('@/assets/intro.png');
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";



const Budget = () => {

    return (
        <View>
            <Text>Budget</Text>




            <Link push href="/(modals)/budgetIntro" asChild>
                <Pressable>
                    <View style={styles.buttonContainer} >

                        <Text>Set Budget</Text>

                    </View>
                </Pressable>
            </Link>


        </View>


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
    pressable: {
        alignItems: 'center',
        padding: 7,
        borderRadius: 8
    },
    buttonContainer: {
        backgroundColor: '#3383CD',
        width: 320,
        height: 68,
        borderRadius: 15,
        margin: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },


});
export default Budget