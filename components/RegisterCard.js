import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import CustomButton from "./UI/Button";
import { Ionicons } from "@expo/vector-icons";

const RegisterCard = ({ button, children, onPress, backFunction, icon ,enteredText ,}) => {
 
  return (
    <View style={styles.container}>
    <View style={[styles.cardContainer]}>
      <View>

      {
       icon && <Ionicons onPress={backFunction} style={{padding:8}} name="arrow-back" size={25} color="white"/>
      }
      
      </View>
      <View>{children}</View>
      <View style={styles.buttonContainer}>
        <CustomButton color="primary3" onPress={onPress}>
          {button}{" "}
        </CustomButton>
      </View>
    </View>
    </View>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  cardContainer: {
    justifyContent:'center',
    marginTop:30,
    height: 350,
    marginHorizontal: 24,
    backgroundColor: GlobalStyles.colors.primary4,
    borderRadius: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
    marginHorizontal: 16,
  },
});
