
import { Link, router } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from '@/app/index';




const Profile = () => {

    

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                router.replace('/(modals)/login');
            })
            .catch(error => alert(error.message))
    }
    return (
       
        
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Profile Information</Text>



            <View style={styles.container2}>
                <Text>  Name: {auth.currentUser?.displayName}</Text>
                <Text>  College: </Text>
                <Text>  Email: {auth.currentUser?.email } </Text>
                <Text>  Income Schedule: </Text>
                <Text>  Limits: </Text>
            </View>



            <View style={styles.container3}>
                <TouchableOpacity onPress={handleSignOut} style={styles.buttonContainer}>
                    <Text style={styles.defaultText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
          

          

            </View>
           
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        
    },
    container2: {
       
        backgroundColor: '#fff',
        padding: 10,
        textalign: '',

    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    } ,
    imageContainer: {
        flex: 1,
        paddingTop: 40,
    },

    welcomeText: {
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 22,
        fontWeight: 'bold'
    },
    defaultText: {
        
        textAlign: 'center',

    },
    pressable: {
        alignItems: 'center',
        padding: 7,
        borderRadius: 8
    },
    buttonContainer: {
        backgroundColor: '#3383CD',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },


});
export default Profile