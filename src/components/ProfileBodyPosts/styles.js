import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyPosts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        marginHorizontal: 2,
        marginVertical: 2
    },  
    image: {
        width: 115,
        height: 115
    },  
    title: {
        fontSize: 40,
        color: '#000'
    }
});

export default style;