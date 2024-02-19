
import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {

    return (
       
        
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Profile Information</Text>



            <View style={styles.container2 }>
                <Text>  Name: </Text>
                <Text>  College: </Text>
                <Text>  Email: </Text>
                <Text>  Income Schedule: </Text>
                <Text>  Limits: </Text>
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
        
        paddingBottom: 20

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
export default Profile