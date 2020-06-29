import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        paddingVertical: 5
    },
    storieButton: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        width: 64,
        height: 64,
        borderRadius: 50,
        padding: 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoProfile: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 50,
        position: 'relative'
    },
    plusCircleIcon: {
        position: 'relative',
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 50,
        backgroundColor: "#fff",
        marginRight: -40,
        marginTop: -15
    },
    storieName: {
        fontSize: 12,
        color: '#000'
    }
});

export default style;