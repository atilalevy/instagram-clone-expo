import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    instagramView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    instagram: {
        width: 100,
        height: 100
    },
    facebookView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebook: {
        width: 100,
        height: 32
    }
});

export default style;