import React from 'react';
import { View, Image } from 'react-native';

import style from './styles';

import profile from '../../assets/images/profile.jpg';

export default function ProfileButton({ focused }){
    return(
        <View style={style(focused).container}>
            <View style={style(focused).imageView}>
                <Image source={profile} style={style(focused).profileImage} />
            </View> 
        </View>
    )
} 