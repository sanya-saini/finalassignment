import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
export const styles = StyleSheet.create({
  //   text1:{
  //     color:'white',
  //     marginTop:3,
  //   },

  //   imgs:{
  //     marginTop:14,
  //   },
  cview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // marginHorizontal:10,
  },
  text1: {
    color: colors.white,
    width: 80,
    paddingTop: 15
  },
  imgs: {
    marginLeft: 20,
  },
  text2: {
    color: colors.white,
    marginRight: 25,
    width: 70,
    paddingTop: 15,
  },
  text3: {
    color: colors.white,
    paddingTop: 15,
    width: 50
  },
  text4: {
    color: colors.white,
    paddingTop: 15
  },
})