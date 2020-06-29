import {  StyleSheet } from 'react-native';

const style = (focused) => StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        padding: 2,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: focused ? '#000' : '#fff'
    },
    profileImage: {
        width: 25,
        height: 25,
        borderRadius: 50
    }
});

export default style;