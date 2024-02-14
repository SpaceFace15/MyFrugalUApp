
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Layout = () => {

    return (











        <Tabs>
            <Tabs.Screen name="Homepage" options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ size }) =>
                    <Ionicons name='home' size={size} />
            }}
            />

            <Tabs.Screen name="Budgeting" options={{
                tabBarLabel: 'Budget',
                tabBarIcon: ({ size }) =>
                    <MaterialIcons name='attach-money' size={size} />
            }}
            />

            <Tabs.Screen name="Resources" options={{
                tabBarLabel: 'Resources',
                tabBarIcon: ({ size }) =>
                    <FontAwesome name='question-circle-o' size={size} />
            }}
            />

            <Tabs.Screen name="Profile" options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ size }) =>
                    <Ionicons name='person-circle-outline' size={size} />
            }}
            />

        </Tabs>


    );
};

export default Layout