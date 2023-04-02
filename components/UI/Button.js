import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";

const CustomButton = ({ children, onPress, color, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={[styles.button , color==='primary2' && styles.button, color==='primary1' && styles.button2, color==='primary3' && {backgroundColor:'white'} ]}>
          <Text style={[styles.buttonText, color==='primary3'&& {color:'black'}]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    height:48,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary1,
    alignItems:'center',
    justifyContent:'center'
  },
  button2: {
    borderRadius: 12,
    height:48,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary2,
    color:'black',
    alignItems:'center',
    justifyContent:'center'
  },
  
  buttonText: {
    color: "white",
    textAlign: "center",
    justifyContent:'center',
    fontSize:22,
  },
  pressed: {
    opacity: 0.6,
    borderRadius: 4,
  },
});
