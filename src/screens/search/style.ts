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
        flexDirection: 'row',
    },
    arrowPic: {
        // position: 'absolute',
        // top: 20,
        // left: 10
    },
    text1: {
        flex: 1,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: fonts.SEMIBOLD,
        color: colors.white,
        textAlign: 'center',
        marginTop: 25,
    },
    linearGradient2: {
        width: 335,
        height: 38,
        opacity: 0.6,
        borderRadius: 15,
        flex: 1
    },
    searchPic: {
        position: 'absolute',
        left: '3.91%',
        top: '25%',
        // height:10,
        // width:10
    },

});
export default styles;