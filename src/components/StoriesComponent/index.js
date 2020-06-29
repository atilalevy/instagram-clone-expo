import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
 
import style from './styles';
import { stories } from '../../data';

export default function StoriesComponent() {
    return(
        <ScrollView
            horizontal
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingHorizontal: 10
            }} 
            style={style.container}
            showsHorizontalScrollIndicator={false}
        > 
            {stories.map((item) => (
                <TouchableOpacity
                    key={item.key}
                    style={style.storieButton}
                >
                    <LinearGradient
                        colors={
                            item.otherProfile ? ['#FDB54D', '#B3079E'] :
                            ['#fff','#fff']
                        }
                        start={[0.9, 0.9]}
                        style={style.gradient}
                    >
                        <Image source={item.photo} style={style.photoProfile} />
                        {item.ownProfile ? 
                            <View style={style.plusCircleIcon}>
                                <AntDesign name="pluscircle" color="#3897F0" size={14} />
                            </View>
                             : 
                            <></>}
                    </LinearGradient>
                    
                    <Text style={style.storieName}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
};