import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';
import { useNavigation } from '@react-navigation/native';

const introImage = require('@/assets/intro.png');


 
const startupPage = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <ImageView introImageSource={introImage} />
            </View>


            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    <Text>Budgeting for students, simplified.</Text>

                </Text>


                <Text style={styles.container}>
                    <Text>One app for all your finance and budget needs... </Text>

                </Text>
            </View>

            <Link push href="/(modals)/createAcc" asChild>
            <Pressable>
                    <View style={styles.buttonContainer} >

                        <Text>Create An Account</Text>
             
            </View>
            </Pressable>
            </Link>


            <View style={styles.defaultText}>


                <Link replace href={'/(tabs)/Homepage'}> Already Have An Account? </Link>

            </View>



            <StatusBar style="auto" />
        </View>
    );
};

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

export default startupPage