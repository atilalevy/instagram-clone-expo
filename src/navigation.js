import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator  } from '@react-navigation/stack';
import { Entypo, FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import LoadingMain from './screens/LoadingMain';
import Main from './screens/Main';
import Search from './screens/Search';
import Add from './screens/Add';
import Activities from './screens/Activities';
import Profile from './screens/Profile';

import ProfileButton from './components/ProfileButton';

const icons = {
    Main: {
        lib: Entypo,
        name: "home"
    },
    Search: {
        lib: Ionicons,
        name: "ios-search"
    },
    Add: {
        lib: FontAwesome,
        name: "plus-square-o"
    },
    Activities: {
        lib: MaterialCommunityIcons,
        name: "heart-outline"
    },
    Profile: {
        lib: MaterialCommunityIcons,
        name: "face-profile"
    }
};

function MainNavigation() {
    return(
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    if (route.name === 'Profile') {
                        return(
                            <ProfileButton focused={focused}/>
                        ) 
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={30} color={color} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#fff',
                    borderTopColor: 'rgba(255, 255, 255, 0.4)'
                },
                activeTintColor: '#000',
                inactiveTintColor: '#92929c',
                showLabel: false
            }}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Activities" component={Activities} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
};

export default function Navigation() {
    return(
        <Stack.Navigator
            initialRouteName="LoadingMain"
            headerMode="none"
        >
            <Stack.Screen name="LoadingMain" component={LoadingMain} />
            <Stack.Screen name="MainNavigation" component={MainNavigation} />
        </Stack.Navigator>
    )
}
