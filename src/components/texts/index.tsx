import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Image } from "react-native";
import { Pics } from "../../assets/images";

interface Props {
    Img : any,
    txt1 : string,
    txt2 : string,
    // txt3 : string,
}
const DetailBox = ({Img, txt1, txt2,} : Props) => {
    return( 
        <View style={styles.cview}>
            <Img style={styles.imgs}/>
            <Text style={styles.text1}> {txt1} </Text>
            <Text style={styles.text1}> {txt2} </Text>
        </View>
      )
   
}

export default DetailBox;