import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";

export const styles = StyleSheet.create({
    
    mainview:{
        zIndex:1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginHorizontal: -60
    },
    text1: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14,
        marginTop: 10,
        fontFamily:fonts.REGULAR,
    },
    bg: {
        flex: 1,
        backgroundColor: "#282281",
    },

    text2: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 12,
        marginTop: 35,
        fontFamily:fonts.REGULAR,
    },
    cloudpic: {
        width: 172,
        marginLeft: 105,
        marginTop: 25,
    },
    text3: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 81,
    },
    text4: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        fontFamily:fonts.REGULAR,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        opacity: 0.8,
        height: 900,
        // elevation:1,
        // zIndex:1
    },
    // bgi:{
    //     opacity: 0.5,
    //     margin:0,
    //     flex:1,
    // },
    rectangle: {
        marginLeft: 45,
        marginTop: 20,

    },
    linearGradient1: {
        width: 294,
        height: 95,
        marginLeft: 45,
        marginTop: 20,
        borderRadius:5,
    },
    view1:{
        justifyContent:'space-around',
        flexDirection: 'row',
        color: '#fff',
        marginTop:20,
        marginHorizontal: -100,
    },
    linearGradient2: {
        width: 58,
        height: 99,
        marginLeft: 5,
        marginTop: 10,
        borderRadius:5,
    },
    linearGradient3:{
        width: 150,
        height: 50,
        borderRadius:5,
        marginTop:10,
        marginLeft:5,
    },
    text5: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
        marginTop: 5,
        fontFamily:fonts.REGULAR,
    },
    compview:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
    },
    view2:{
        justifyContent:'space-around',
        flexDirection: 'row',
        color: '#fff',
        marginTop:20,
        marginHorizontal: -130,
    },
    time:{
        marginTop:5,
        color:'white',
        textAlign:'center',
    },
    imgg:{
        alignItems:'center',
        marginLeft:10,
        marginVertical:5,
        // resizeMode:'cover',
        // height:50,
        // width:50,
    },
    temp:{
        textAlign:'center',
        color:'white',
    },
    city:{
        color:'white',
        marginLeft:50,
        marginTop:5,
    },
    imggg:{
        marginVertical:-20,
        marginLeft:5,
        // resizeMode:'cover',
        // height:50,
        // width:50
    },
    weather:{
        color:'white',
        marginLeft:50,
        fontSize:11,
    },
    degree:{
        color:'white',
        marginLeft:130,
        marginTop:-25,
    },
    
})