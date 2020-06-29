import React from 'react';
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import style from './styles';
import instagram from '../../assets/images/instagram.png';
import StoriesComponent from '../../components/StoriesComponent';
import PostsComponent from '../../components/PostsComponent';

export default function Main() {
    return(
        <SafeAreaView style={style.container}>

            <View style={style.header}>
                <View style={style.camLogo}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="camera-outline" size={26} color="#000" />
                    </TouchableOpacity>
                    
                    <Image source={instagram} style={style.logo} />
                </View>

                <TouchableOpacity>
                    <Feather name="send" size={26} color="#000" />
                </TouchableOpacity> 
            </View>
            <ScrollView>
                <View style={style.storiesView}>
                    <StoriesComponent />
                </View>

                <View style={style.postsView}>
                    <PostsComponent />
                </View>

                <ActivityIndicator size='large' color="rgba(0, 0, 0, 0.2)" />

            </ScrollView>
            
        </SafeAreaView>
    )
};
