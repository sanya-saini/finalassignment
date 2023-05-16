import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";

export const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        opacity: 0.8,
        height: 900,
        // elevation:1,
        // zIndex:1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        marginHorizontal: -60,
        position: 'absolute',
        marginLeft: 20,
    },
    text1: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 120,
        fontFamily: fonts.REGULAR,
    },
    linearGradient1: {
        position: 'absolute',
        width: 387,
        height: 255,
        marginLeft: -6,
        marginTop: 80,
        borderRadius: 5,
    },
    compview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        // marginTop:150,
    },
    cloudpic: {
        width: 169,
        marginLeft: 10,
        marginTop: 10,
    },
    view1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: '#fff',
    },
    t1: {
        color: '#fff',
        position: 'absolute',
        marginLeft: 230,
        marginTop: 20,
        fontFamily: fonts.SEMIBOLD,
        fontWeight: '600',
        fontSize:50,
    },
    t2: {
        color: '#fff',
        position: 'absolute',
        marginLeft: 295,
        marginTop: 60,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize:30,
    },
    t3: {
        color: '#fff',
        position: 'absolute',
        marginLeft: 320,
        marginTop: 70,
        fontFamily: fonts.SEMIBOLD,
        fontWeight: '600',
        fontSize:25,
    },
    compview2:{
        marginTop:380,  
    }
})