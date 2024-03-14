import { Link, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';
const introImage = require('@/assets/intro.png');
import { useEffect, useLayoutEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { DocumentData, getFirestore } from "firebase/firestore";

import { db, auth, } from '@/app/index';
import { Layout, userID } from '@/app/(modals)/createAcc';
import { onValue, ref, getDatabase } from "firebase/database";
import { doc, setDoc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { collection, query, where, Firestore, getDocs } from "firebase/firestore";



const tuition = () => {




    const [tuitionExpenses, settuitionExpenses] = useState<any[]>([]);
    //make collection reference
    const foodCol = collection(db, "expenses");

    const q = query(foodCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "tuitionExpense")) 

    useLayoutEffect(() => {
        onSnapshot(q, (snapshot) => {
            let tuition: { id: string; }[] = []

            snapshot.docs.forEach((doc) => {

                tuition.push({ ...doc.data(), id: doc.id })
            })

            settuitionExpenses(tuition);
        })

    }, [])





    return (




        <SafeAreaView >

            <View>

                <Text style={styles.welcomeText}> Tuition Expenses: </Text>
            </View>






            <View style={styles.container} >

                <FlatList
                    data={tuitionExpenses}
                    renderItem={({ item }) => <View style={styles.container}>


                        <Text style={styles.welcomeText}> {item.desc}</Text>
                        <Text style={styles.welcomeText}> ${item.exAmount}</Text>

                    </View>} />


            </View>

            <Link push href="/(modals)/addExpense" asChild>
                <Pressable>
                    <View style={styles.buttonContainer} >

                        <Text>Add Expense</Text>

                    </View>
                </Pressable>
            </Link>



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
        textAlign: "left",
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
export default tuition