import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from 'react-native';
import IndexUser from './routes/IndexUser'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
        <NavigationContainer>
            <IndexUser />
        </NavigationContainer> 

    </>
           
  );
};
 