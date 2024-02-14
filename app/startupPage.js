import { Link, router } from "expo-router";
import { Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageView from '@/components/ImageView';
import Button from '@/components/Buttons';


const introImage = require('@/assets/intro.png');

const startupPage = () => {
    return(
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

        <View style={styles.buttonContainer}>
            <Button label="Create An Account" />

        </View>


        <View style={styles.defaultText}>


                <Link href = {'/(tabs)/Homepage'}> Already Have An Account? </Link>

        </View>



        <StatusBar style="auto" />
    </View>
       ) ;
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

    }



});

export default startupPage