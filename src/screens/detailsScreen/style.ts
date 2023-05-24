import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import colors from "../../assets/colors";

export const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        opacity: 0.8,
        height: 900,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        position: 'absolute',
        marginLeft: 15,
    },
    text1: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 120,
        fontFamily: fonts.SEMIBOLD,
    },
    linearGradient1: {
        // position: 'absolute',
        // width: 362,
        height: 255,
        // marginHorizontal:15,
        marginTop: 90,
        borderRadius: 15,
    },
    compview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
    },
    cloudpic: {
        width: 169,
        marginLeft: 10,
        marginTop: 10,
    },
    view1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: colors.white,
    },
    t1: {
        color: colors.white,
        position: 'absolute',
        marginLeft: 150,
        marginTop: 30,
        fontFamily: fonts.SEMIBOLD,
        fontWeight: '600',
        fontSize: 45,
    },
    t2: {
        color: colors.white,
        position: 'absolute',
        marginLeft: 265,
        marginTop: 70,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 25,
    },
    t3: {
        color: colors.white,
        position: 'absolute',
        marginLeft: 290,
        marginTop: 80,
        fontFamily: fonts.SEMIBOLD,
        fontWeight: '600',
        fontSize: 20,
    },
    compview2: {
        marginTop: 40,
    }
})