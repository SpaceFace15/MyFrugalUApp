
import { Link, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';

const introImage = require('@/assets/intro.png');
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import React from 'react'
import { db, auth, } from '@/app/index';
import { Layout, userID } from '@/app/(modals)/createAcc';

import { doc, setDoc, updateDoc } from "firebase/firestore";


const Home = () => { //will contain recent expenses , graphic, and largest expenses so far? (or largest category)


    

    return (
        <View>
            <Text>Homepage</Text>




        </View>

      
    )
}

export default Home