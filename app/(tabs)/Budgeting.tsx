
import { Link, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';

const introImage = require('@/assets/intro.png');
import { useEffect, useState, useLayoutEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAggregateFromServer, getFirestore, sum } from "firebase/firestore";
import { db, auth, } from '@/app/index';
import { Layout, userID } from '@/app/(modals)/createAcc';

import { doc, setDoc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";
import { collection, query, where, Firestore } from "firebase/firestore";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";














const Budget = () => {

   



    const [foodTotals, setfoodTotals] = useState<number>();
    const [transTotals, settransTotals] = useState<number>();
    const [tuitionTotals, settuitionTotals] = useState<number>();
    const [housingTotals, sethousingTotals] = useState<number>();
    const [otherTotals, setotherTotals] = useState<number>();
    const [budget, setbudget] = useState<number>();
    const [avaliableCash, setavaliableCash]= useState<number>();
    const [frequency, setfrequency] = useState("");




    const foodCol = collection(db, "expenses");
    const foodq = query(foodCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "foodExpense"));

    const transCol = collection(db, "expenses");
    const transq = query(transCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "transportationExpense"));

    const tuitionCol = collection(db, "expenses");
    const tuitionq = query(tuitionCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "tuitionExpense"));

    const housingCol = collection(db, "expenses");
    const housingq = query(housingCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "housingExpense"));
   
    const otherCol = collection(db, "expenses");
    const otherq = query(otherCol, where("expenseOwner", "==", auth.currentUser?.uid),
        where("exType", "==", "otherExpense"));


    

    const budgetCol = collection(db, "user");
    const budgetq = query(budgetCol, where("UserUID", "==", auth.currentUser?.uid))


    onSnapshot(budgetq, (snapshot) => { //if budget goes below 0 , do (something)
        var convert = 0;
        var freq = "";
        snapshot.docs.forEach((doc) => {


           freq = doc.data().frequency

            var rounded = parseFloat(doc.data().amount).toFixed(2);
            convert = parseFloat(rounded);
            
        })
        setfrequency(freq);
        setbudget(convert);
        var convertTotal = (convert - Number(foodTotals) - Number(transTotals) - Number(tuitionTotals) - Number(housingTotals) - Number(otherTotals));
        convertTotal = Number(convertTotal.toFixed(2))
        setavaliableCash(convertTotal);


    })
   


            
    useLayoutEffect(() => {
        
       


        onSnapshot(foodq, (snapshot) => {  //food expenses
           
            var snap = 0;
            snapshot.docs.forEach((doc) => {

              

                var rounding = parseFloat(doc.data().exAmount).toFixed(2);

                const convert = parseFloat(rounding);

                snap += convert

                snap.toFixed(2);
              
              
            })
            

            setfoodTotals(snap);

        })

        onSnapshot(transq, (snapshot) => {  
             
            var snap = 0;
            snapshot.docs.forEach((doc) => {



                var rounding = parseFloat(doc.data().exAmount).toFixed(2);

                const convert = parseFloat(rounding);

                snap += convert

                snap.toFixed(2);


            })


            settransTotals(snap);

        })

        onSnapshot(tuitionq, (snapshot) => { 

            var snap = 0;
            snapshot.docs.forEach((doc) => {



                var rounding = parseFloat(doc.data().exAmount).toFixed(2);

                const convert = parseFloat(rounding);

                snap += convert

                snap.toFixed(2);


            })


            settuitionTotals(snap);

        })


        onSnapshot(housingq, (snapshot) => {  

            var snap = 0;
            snapshot.docs.forEach((doc) => {



                var rounding = parseFloat(doc.data().exAmount).toFixed(2);

                const convert = parseFloat(rounding);

                snap += convert

                snap.toFixed(2);


            })


            sethousingTotals(snap);

        })



        onSnapshot(otherq, (snapshot) => {  

            var snap = 0;
            snapshot.docs.forEach((doc) => {



                var rounding = parseFloat(doc.data().exAmount).toFixed(2);

                const convert = parseFloat(rounding);

                snap += convert

                snap.toFixed(2);


            })


            setotherTotals(snap);

        })

        
        

       


    }, [])



    

    


   return (

      

        <SafeAreaView>
            <ScrollView>
                <View>
                   <Text style={styles.welcomeText}> Current Budget: $ {budget}</Text>
                   <Text style={styles.defaultText}> {frequency}</Text>
                </View>




                <View style={styles.imageContainer}> 

                    

                </View>




                <View>
                    <Text style={styles.welcomeText} > Expenses </Text>
                </View>

               


               <View style={styles.container} >

                   <Text style={styles.itemText} > Budget Remaining:  </Text>


                   <Text style={styles.itemText2} > ${avaliableCash} </Text>




               </View>



                <Link push href="/(expensetype)/foodTab" asChild>
                    <Pressable>
                       <View style={styles.container} >

                           <Text style={styles.itemText} > Food </Text>
                           

                           <Text style={styles.itemText2} > ${foodTotals} </Text>



                          
                </View>


                </Pressable>
                </Link>
               

                <Link push href="/(expensetype)/transportationTab" asChild>
                   <Pressable>
                       <View style={styles.container} >

                           <Text style={styles.itemText} > Transportation </Text>


                           <Text style={styles.itemText2} > ${transTotals} </Text>




                       </View>
                    </Pressable>
                </Link>


                <Link push href="/(expensetype)/tuitionTab" asChild>
                   <Pressable>
                       <View style={styles.container} >

                           <Text style={styles.itemText} > Tuition </Text>


                           <Text style={styles.itemText2} > ${tuitionTotals} </Text>




                       </View>
                   </Pressable>
               </Link>


                <Link push href="/(expensetype)/housingTab" asChild>
                   <Pressable>
                       <View style={styles.container} >

                           <Text style={styles.itemText} > Housing </Text>


                           <Text style={styles.itemText2} > ${housingTotals} </Text>




                       </View>
                   </Pressable>
               </Link>



                <Link push href="/(expensetype)/otherTab" asChild>
                   <Pressable>
                       <View style={styles.container} >

                           <Text style={styles.itemText} > Other </Text>


                           <Text style={styles.itemText2} > ${otherTotals} </Text>




                       </View>
                   </Pressable>
               </Link>

                </ScrollView>
                
           
            

            
            </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    itemText2: {

        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: "right"

    },

});
export default Budget