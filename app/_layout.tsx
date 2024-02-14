import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native/types';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Router, useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native';


export {
 
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  
  initialRouteName: '(tabs)',
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

  return <RootLayoutNav />;
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
    const router = useRouter();

    return (
    
        <Stack>
            

            <Stack.Screen name="startupPage" options={{
                presentation: 'modal',
                title: 'Welcome',
            }}

            />

            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        </Stack>

    );
}
