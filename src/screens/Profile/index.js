import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import style from './styles';

import ProfileComponent from '../../components/ProfileComponent';
import ProfileBodyPosts from '../../components/ProfileBodyPosts';

export default function Profile() {
    return(
        <SafeAreaView style={style.container}>

            <View style={style.header}>
                <TouchableOpacity style={style.buttonProfile}>
                    <Text style={style.headerName}>mike_rn</Text>
                    <MaterialIcons name="expand-more" size={20} color="#000" />
                </TouchableOpacity>
                
                <TouchableOpacity style={style.headerButtonMenu}>
                    <SimpleLineIcons name="menu" size={26} color="#000" />
                </TouchableOpacity>
                
            </View>
        <ScrollView>
            <View style={style.profile}>
                <ProfileComponent />
            </View>

            <View style={style.posts}>
                <ProfileBodyPosts />
            </View>
        </ScrollView>    
        
        </SafeAreaView>
    )
};
