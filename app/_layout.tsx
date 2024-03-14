import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, router, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export {
 
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  
  initialRouteName: 'startupPage',
};


SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }




    return <RootLayoutNav />; //check if stack
}


function newUserCheck() { //check if new user or has previously logged in, show startuppage and login screen if true
    return true;
}

/* headerLeft: () => (
<TouchableOpacity onPress={() => router.back()}>
    <Ionicons name="close-outline" size={25} />
</TouchableOpacity>
                   )*/










        //show startuppage if new or else show tab screens if already logged in
function RootLayoutNav() {
   

    return (
    
        <Stack>
          
            

            <Stack.Screen name="index" options={{
              
                title: 'Welcome',
                presentation: 'modal',
                }} />
                
           
           
            <Stack.Screen name="(modals)/createAcc" options={{

                title: 'Create an Account',
                presentation: 'modal',
            }} />

            <Stack.Screen name="(modals)/login" options={{

                title: 'Log in',
                presentation: 'modal',
            }} />
          
            <Stack.Screen name="(modals)/budgetIntro" options={{

                title: 'Create Your Account',
                presentation: 'modal',
            }} />
            <Stack.Screen name="(modals)/addExpense" options={{

                title: 'Add an Expense',
                presentation: 'modal',
            }} />


            <Stack.Screen name="(tabs)" options={{
                headerShown: false,
                
            }} />


         
           
        

        </Stack>

    );
}
