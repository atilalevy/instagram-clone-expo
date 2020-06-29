import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        height: 60,
        padding: 10,
        justifyContent: 'space-between'
    },
    buttonProfile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerButtonMenu:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    profile: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)'
    },
    posts: {
    }
});

export default style;