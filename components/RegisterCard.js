import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/style";
import CustomButton from "./UI/Button";

const RegisterCard=({button,children, onPress})=>{
    return(
        
         <View style={[styles.container]}>

            <View>
                {children}
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton color='primary3' onPress={onPress}>{button} </CustomButton>
            </View>
            </View>
      
    )
}

export default RegisterCard;

const styles=StyleSheet.create({
   
    container:{
        height:350,
        marginHorizontal:24,
        marginBottom:50,
        justifyContent:'center',
        backgroundColor:GlobalStyles.colors.primary4,
        borderRadius:16
    },
    buttonContainer: {
        flex:1,
        justifyContent: "flex-end",
        marginBottom:24,
        marginHorizontal:16,
      },
})