import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import style from './styles';

import { stories, profileInfo, highlights } from '../../data';
const myProfile = stories[0];


export default function ProfileComponent(){
    const [show, setShow] = useState(true);

    function handleShowHighlights() {
        setShow(!show);
    }

    return(
        <View style={style.container}>
            
            <View style={style.profile}>
                <TouchableOpacity style={style.profileStorieAdd}>
                    <Image source={myProfile.photo} style={style.photoProfile} />
                    <View style={style.plusCircleIcon}>
                        <AntDesign name="pluscircle" color="#3897F0" size={22} />
                    </View>
                </TouchableOpacity>
            

                <View style={style.info}>
                    {profileInfo.map((item) => (
                        <TouchableOpacity
                            style={style.buttonInfo}
                            key={item.key}
                        >
                            <Text style={style.numberInfo}>{item.number}</Text>
                            <Text style={style.textInfo} numberOfLines={1} ellipsizeMode='tail'>{item.info}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={style.detailsProfile}>
                <Text style={style.nameDetails}>Mike React</Text>
                <Text style={style.infoDetails}>Desenvolvedor React</Text>
                <Text style={style.infoDetails}>Futuro milionário</Text>
                <TouchableOpacity style={style.buttonEditProfile}>
                    <Text style={style.textEditProfile}>Editar perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={style.storiesHighlights}>
                <TouchableWithoutFeedback
                    onPress={handleShowHighlights}
                >
                    <View style={style.buttonMLH}>
                        <Text style={style.textMLH}>Destaques dos stories</Text>
                        {show ? 
                            <MaterialIcons name="expand-less" size={20} color="#000" /> : 
                            <MaterialIcons name="expand-more" size={20} color="#000" />
                        }
                    </View> 
                </TouchableWithoutFeedback>

                {show ? 
                    <View style={style.highlights}>
                        <Text style={style.textHL}>Mantenha seus stories favoritos no seu perfil</Text>
                        <View style={style.buttonsHL}>
                            {highlights.map((item) => (
                                <View key={item.key}>
                                    <TouchableOpacity 
                                        style={item.add ? style.buttonHLAdd : style.buttonHL}
                                    >
                                        {item.add ? <AntDesign name="plus" size={25} color="#000" />: <></>}
                                    </TouchableOpacity>
                                    {item.add ? <Text style={style.textAdd}>Novo</Text> : <></>}
                                </View>
                                
                            ))}
                        </View>
                    </View> : 
                    <></>
                }

            </View>
            

        </View>
    )
};