
import { Link, router } from "expo-router";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';

import { useNavigation } from '@react-navigation/native';
import { Pressable, Button } from "react-native";
const budgetImage = require('@/assets/budget.jpg');
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


// show this page first when user presses budget tab only if hasBudget = false , at the end of making budget, will be changed to true

const budgetIntro = () => {

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <ImageView introImageSource={budgetImage} />
            </View>


            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    <Text>We'll need some  information to set up your personalized budget plan.</Text>

                </Text>


                
            </View>

            <View style={styles.buttonContainer}>
                <Button color="#000"
                    title="Create Budget"


                    onPress={() => router.replace("/(modals)/makeBudget")}
                />

            </View>



            
        </View>
    );
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
        fontSize: 18,
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
export default budgetIntro
