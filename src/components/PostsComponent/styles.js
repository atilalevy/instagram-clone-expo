import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    headerProfile: {
        flexDirection: 'row'
    },
    headerPhoto: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },
    headerName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        
    },
    postPhoto: {
        height: 300,
        width: 400
    },
    menuContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    marginButton: {
        marginHorizontal: 5
    },
    menuContentLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },
    postTextView: {
        paddingHorizontal: 10
    },  
    enjoyText: {
        fontSize: 14
    },
    bold: {
        fontWeight: 'bold'
    },
    commentsText:{
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.6)"
    },
    timeText: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.6)"
    }
});

export default style;