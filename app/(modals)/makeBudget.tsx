
import { useNavigation, Link, router, useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import ImageView from '@/components/ImageView';
import { RadioButton } from 'react-native-paper';
import React, { useState, useMemo } from 'react';
import { Pressable, Button } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import RadioGroup from 'react-native-radio-buttons-group';
import { db, auth } from '@/app/index';
import { Layout, userID } from '@/app/(modals)/createAcc';

import { doc, setDoc, updateDoc } from "firebase/firestore";
//This page will only pop up if newUser == True  AND/OR directly link to show up after creating account









const makeBudget = () => {
   


    const moveToHome = () => {

        router.replace("/(tabs)/Homepage")

    }


    const submitData = async () => {
        
       await updateDoc(doc(db, "user", userID),{


            frequency: freqency

        })

    }

    
    const [freqency, setFrequency] = useState('');
    const [selectedIncome, setSelectedIncome] = useState('option1');
    const [limit, setlimit] = useState('yes');

    return (
        <View>
            <KeyboardAvoidingView behavior="padding">

                <Text style={styles.defaultText}> Amount Made Per Pay Period :  </Text>


                <TextInput
                    style={styles.textBox}          //Will make these private and censored
                    placeholder="Dollar Amount"
                    placeholderTextColor="#000"
                    value={freqency}
                    onChangeText={text => setFrequency(text)}
                    
                />






                <View>

                    <View>

                        <Text style={{ paddingLeft: 10 }}>Select Income Frequency</Text>


                        <RadioButton.Group
                            onValueChange={(value) => setSelectedIncome(value)}
                            value={selectedIncome}
                        >



                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="option1" color="black" />
                                <Text>Weekly</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="option2" color="black" />
                                <Text>Bi-Weekly</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="option3" color="black" />
                                <Text>Semi-Monthly</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="option4" color="black" />
                                <Text>Monthly</Text>
                            </View>


                        </RadioButton.Group>


                    </View>


                    <View>

                        <Text style={{ paddingLeft: 10 }}>Would You Like To Set Budget Limits? </Text>


                        <RadioButton.Group
                            onValueChange={(value) => setlimit(value)}
                            value={limit}
                        >



                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="yes" color="black" />
                                <Text>Yes</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                                <RadioButton value="no" color="black" />
                                <Text>No</Text>
                            </View>




                        </RadioButton.Group>


                    </View>



                </View>


            </KeyboardAvoidingView>



            <View style={styles.buttonContainer}>
                <Button color="#000"
                    title="Create Budget"

                    onPress={() => { submitData(); moveToHome(); }}
                    
                />

            </View>




        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    defaultText: {
        paddingTop: 30

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
        marginBottom: 70,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        paddingLeft: 10,



    },
    button: {
        color: "#000"
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },

});


export default makeBudget