import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";

import Coracao from "../assets/coracao.svg";
import Home from "../assets/home.svg";

export default function AppRotas() {
    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({ 
                headerShown: false,
                tabBarActiveTintColor: '#2a9f85',
                tabBarInactiveTintColor: '#c7c7c7',
                tabBarIcon: ({ color }) => {
                    let Icon = Home;

                    if(route.name === 'Melhores Produtores'){
                        Icon = Coracao;
                    }

                    return <Icon color={color} width={20} height={20} />
                },
                tabBarLabelStyle: estilos.titulo
            })}>
            <Tab.Screen name="Home" component={ProdutorRotas} />
            <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize: 16,
        lineHeight: 18
    }
  });