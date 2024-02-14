import { StyleSheet, Image } from 'react-native';


export default function ImageView({ introImageSource }) {
    return (

        <Image source={introImageSource} style={styles.image}  />
    );
}


const styles = StyleSheet.create({
 
    
    image: {
        width: 400,
        height: 250,
        borderRadius: 10,
    },




});