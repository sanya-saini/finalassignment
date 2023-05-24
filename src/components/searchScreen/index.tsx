import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Image } from "react-native";
import { Pics } from "../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../assets/colors";

interface Props {
    txt1: string,
    txt2: string,
    txt3: string,
    // Img: any
}
const City = ({ txt1, txt2, txt3 }: Props) => {
    return (
        <View style={{ flex: 1, marginBottom: 140 }}>
            <LinearGradient colors={[colors.lpurple, colors.dpurple]} style={styles.gradientComp} >
                
                <View>
                <Text style={styles.text1}> {txt1} </Text>
                <Text style={styles.text2}> {txt2} </Text>
                </View>
                <Text style={styles.text3}> {txt3} </Text>

               
            </LinearGradient>
            {/* <View style={styles.imgs}>
                <Img />
            </View> */}
            
        </View>

    )

}

export default City;