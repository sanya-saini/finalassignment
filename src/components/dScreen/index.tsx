import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Image } from "react-native";
import { Pics } from "../../assets/images";

interface Props {
    txt1 : string,
    Img : any,
    txt2 : string,
    txt3 : string,
    txt4 : string,
}
const Txtt = ({txt1, Img, txt2, txt3, txt4} : Props) => {
    return( 
        <View style={styles.cview}>
            
            <Text style={styles.text1}> {txt1} </Text>
            <Img style={styles.imgs}/>
            <Text style={styles.text2}> {txt2} </Text>
            <Text style={styles.text3}> {txt3} </Text>
            <Text style={styles.text4}> {txt4} </Text>
        
        </View>
      )
   
}

export default Txtt;