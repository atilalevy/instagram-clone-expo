import React from 'react';
import { View, Image } from 'react-native';

import style from './styles';

import instagramLogo from '../../assets/images/instagramlogo.png';
import fromFacebook from '../../assets/images/fromfacebook.png';

export default function LoadingMain({ navigation }){

    function Loading(){
        setTimeout(() => {
            navigation.navigate('MainNavigation');
        }, 2000);
    }

    Loading();

    return(
        <View style={style.container}>
            <View style={style.instagramView}>  
                <Image source={instagramLogo} style={style.instagram} />    
            </View>
            <View style={style.facebookView}>
                <Image source={fromFacebook} style={style.facebook}/>   
            </View>
        </View>
    )
}