import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import style from './styles';

import instagram from '../../assets/images/instagram.png';

export default function HeaderMain(){
    return(
        <SafeAreaView style={style.container}>
            
            <View style={style.camLogo}>
                <MaterialCommunityIcons name="camera-outline" size={28} color="#000" />
                <Image source={instagram} style={style.logo} />
            </View>

            <Feather name="send" size={28} color="#000" />

        </SafeAreaView>
    );
};
