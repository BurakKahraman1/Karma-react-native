import { View, StyleSheet, Text, Pressable, ImageBackground } from "react-native";

const HomeItem = ({name,date,imageUrl,onPress}) => {
  return (
    <View style={styles.mealItem}>
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
    >
      <View style={styles.innerContainer}>
        <View>
        <ImageBackground source={{uri:imageUrl}} style={[styles.image,{justifyContent:'flex-end',alignItems:'flex-start'}]} >
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{date}</Text>
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  </View>
  );
};
export default HomeItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 12,
        borderRadius:8,
        backgroundColor: "white",
        overflow: 'hidden',
        elevation: 6,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 12,
      },
      innerContainer: {
        borderRadius: 8,
      },
      image: {
        width: 160,
        height: 160,
      },
      title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        marginHorizontal: 8,
        marginVertical:4,
        color:'white'
      },
      buttonPressed: {
        opacity: 0.7,
      },
  }
);
