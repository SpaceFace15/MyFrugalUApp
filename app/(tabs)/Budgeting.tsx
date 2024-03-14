
import { Link, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';

const introImage = require('@/assets/intro.png');
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { db, auth, } from '@/app/index';
import { Layout, userID } from '@/app/(modals)/createAcc';

import { doc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { collection, query, where, Firestore } from "firebase/firestore";






const Budget = () => {

   

    return (



      

        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.welcomeText}> Current Budget: </Text>
                </View>




                <View style={styles.imageContainer}> 

                    

                </View>




                <View>
                    <Text style={styles.welcomeText} > Expenses </Text>
            </View>

                <View style={styles.container} >

                    <Text style={styles.itemText} > Cash Avaliable </Text>

                </View>



                <Link push href="/(expensetype)/foodTab" asChild>
                    <Pressable>
                <View style={styles.container} >

                    <Text style={styles.itemText} > Food </Text>

                </View>


                </Pressable>
                </Link>


                <Link push href="/(expensetype)/transportationTab" asChild>
                    <Pressable>
                        <View style={styles.container} >

                            <Text style={styles.itemText} > Transportation </Text>

                        </View>


                    </Pressable>
                </Link>


                <Link push href="/(expensetype)/tuitionTab" asChild>
                    <Pressable>
                        <View style={styles.container} >

                            <Text style={styles.itemText} > Tuition </Text>

                        </View>


                    </Pressable>
                </Link>


                <Link push href="/(expensetype)/housingTab" asChild>
                    <Pressable>
                        <View style={styles.container} >

                            <Text style={styles.itemText} > Housing </Text>

                        </View>


                    </Pressable>
                </Link>



                <Link push href="/(expensetype)/otherTab" asChild>
                    <Pressable>
                        <View style={styles.container} >

                            <Text style={styles.itemText} > Other </Text>

                        </View>


                    </Pressable>
                </Link>

                </ScrollView>
                
           
            

            
            </SafeAreaView>


    )
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#fff',
        borderWidth: .6,
        borderColor: "grey",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        textAlign : "left",
    },

    imageContainer: {
        flex: 1,
        paddingTop: 40,
    },

    welcomeText: {
       
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemText: {

        fontFamily: 'Arial',
        fontSize: 20,
       
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