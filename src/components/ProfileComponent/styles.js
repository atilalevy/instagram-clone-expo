import { StyleSheet } from 'react-native';

// MLH - MoreLessHighlights
// HL - Highlights

const style = StyleSheet.create({
    container: {
        padding: 10
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileStorieAdd: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoProfile: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100,
        position: 'relative'
    },
    plusCircleIcon: {
        position: 'relative',
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 50,
        backgroundColor: "#fff",
        marginRight: -80,
        marginTop: -25
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    buttonInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    numberInfo: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInfo: {
        width: 70,
        color: '#000',
        fontSize: 15
    },
    detailsProfile: {
        justifyContent: 'flex-start',
        marginTop: 10
    },
    nameDetails: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoDetails: {
        fontSize: 16
    },
    buttonEditProfile: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        backgroundColor: '#fff'
    },
    textEditProfile: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    storiesHighlights: {
        marginTop: 10
    },
    buttonMLH: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textMLH: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    highlights: {
    },
    textHL: {
        fontSize: 14
    },
    buttonsHL: {
        marginTop: 10,
        flexDirection: 'row'
    },
    buttonHL: {
        marginHorizontal: 10,
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    buttonHLAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 0.6,
        borderColor: '#000'
    },
    textAdd: {
        marginTop: 5,
        fontSize: 12,
        alignSelf: 'center'
    }
});

export default style;