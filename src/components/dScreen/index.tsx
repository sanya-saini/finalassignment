import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Image } from "react-native";
import { Pics } from "../../assets/images";
import format from "date-fns/format";

interface Props {
  txt1: string,
  Img: any,
  txt2: string,
  txt3: string,
  txt4: string,
}
const Day = ({ txt1, Img, txt2, txt3, txt4 }: Props) => {
  console.log('date', txt1)
  const date = new Date(txt1);
  console.log('jnbh,', date)

  return (
    <View style={styles.cview}>

      <Text style={styles.text1}>{format(date, 'EEEE')} </Text>
      <Image source={{ uri: 'https:' + Img }} style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }} />
      <Text style={styles.text2}> {txt2} </Text>
      <Text style={styles.text3}> {txt3} </Text>
      <Text style={styles.text4}> {txt4} </Text>

    </View>
  )

}

export default Day;