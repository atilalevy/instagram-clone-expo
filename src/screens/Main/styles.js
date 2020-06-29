import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        backgroundColor: "#FAFAFA",
        padding: 15,
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8"
    },
    camLogo: {
        flexDirection: 'row'
    },
    logo: {
        marginLeft: 8,
        width: 92,
        height: 26
    },
    storiesView: {
        height: 92,
        marginTop: 2
    }
});

export default style;