import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import colors from "../../assets/colors";
export const styles = StyleSheet.create({
    gradientComp: {
        // position: 'absolute',
        // width: 321,
        flexDirection:'row',
        height: 90,
        marginHorizontal: 5,
        borderRadius: 15,
        justifyContent:'space-between',
        // flex:1,
    },
    text1: {
        // position: 'absolute',
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: fonts.SEMIBOLD,
        color: colors.white,
        marginTop: 15,
    },
    text2: {
        // position: 'absolute',
        marginLeft: 22,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 14,
        color: colors.white,
        opacity: 0.8
    },
    text3: {
        color:colors.white,
        fontFamily: fonts.REGULAR,
        fontSize:30,
        fontWeight: 'bold',
        marginRight: 20,
        marginVertical:20,

    },
    // imgs: {
    //     // marginLeft:250,
    //     // position:'absolute',
    //     top: -110,
    //     alignItems: 'flex-end'
    // }
})