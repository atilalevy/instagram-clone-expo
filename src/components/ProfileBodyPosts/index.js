import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons  } from '@expo/vector-icons';

import style from './styles';
const TopTab = createMaterialTopTabNavigator();

import { myposts, postswithme } from '../../data';

const icons = {
    MyPostsTab: {
        lib: MaterialIcons,
        name: "grid-on"
    },
    PostsWithMeTab: {
        lib: MaterialIcons,
        name: "person-pin"
    }
};

function MyPosts(){
    return(
        <View style={style.container}>

            <View style={style.bodyPosts}>
                {myposts.map((item) => (
                    <TouchableOpacity 
                        key={item.key}
                        style={style.buttonImage}
                    >
                        <Image source={item.img} style={style.image} />
                    </TouchableOpacity>
                ))}
            </View>
            
        </View>
    )
}

function PostsWithMe(){
    return(
        <View style={style.container}>

            <View style={style.bodyPosts}>
                {postswithme.map((item) => (
                    <TouchableOpacity 
                        key={item.key}
                        style={style.buttonImage}
                    >
                        <Image source={item.img} style={style.image} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default function ProfileBodyPosts(){
    return(
        <TopTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={25} color={color} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#FAFAFA'
                },
                activeTintColor: '#000',
                inactiveTintColor: '#92929c',
                showLabel: false,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: "#000",
                    height: 1
                }
            }}
        >
            <TopTab.Screen name="MyPostsTab" component={MyPosts} />
            <TopTab.Screen name="PostsWithMeTab" component={PostsWithMe} />
        </TopTab.Navigator>
    )
};
