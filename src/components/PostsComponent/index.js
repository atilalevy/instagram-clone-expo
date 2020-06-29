import React from 'react';
import { ScrollView, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { AntDesign, SimpleLineIcons, FontAwesome, Feather } from '@expo/vector-icons';

import style from './styles';

import { posts } from '../../data';
 
export default function PostsComponent() {

    return(
        <ScrollView
            showsVerticalScrollIndicator = {false}
        >
            {posts.map((item) => (
                <View 
                    style={style.container}
                    key={item.key}    
                >
                    <View style={style.header}>

                        <View style={style.headerProfile}>
                            <Image style={style.headerPhoto} source={item.photoProfile} />
                            <Text style={style.headerName}>{item.name}</Text>
                        </View>

                        <TouchableOpacity>
                            <SimpleLineIcons name="options-vertical" size={20} color="#000" />
                        </TouchableOpacity>

                    </View>

                    <View style={style.content}>
                        
                        <Image style={style.postPhoto} source={item.postPhoto} />

                        <View style={style.menuContent}>
                            <View style={style.menuContentLeft}>
                                <TouchableOpacity>
                                    <AntDesign name="hearto" size={25} color="#000" />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.marginButton}>
                                    <Feather name="message-circle" size={25} color="#000" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="send" size={25} color="#000" />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity>
                                <FontAwesome name="bookmark-o" size={25} color="#000" />
                            </TouchableOpacity>
                            

                        </View>

                        <View style={style.postTextView}>
                            <Text style={style.enjoyText}>
                                Curtido por <Text style={style.bold}>mike_rn</Text> e <Text style={style.bold}>outras pessoas</Text>
                            </Text>
                            <Text numberOfLines={2} ellipsizeMode='tail'><Text style={style.bold}>{item.name}</Text> {item.postDescription}</Text>
                            { item.comments > 0 ?
                                <Text style={style.commentsText}>
                                    Ver todos os {item.comments} comentários
                                </Text> :
                                <></>
                            }
                            <Text style={style.timeText}>{item.time}</Text>
                        </View>

                    </View>
                </View>
            ))}

        </ScrollView>
    )
}