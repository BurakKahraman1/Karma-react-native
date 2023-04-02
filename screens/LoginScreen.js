import { View, StyleSheet, Text, TextInput } from "react-native";
import RegisterCard from "../components/RegisterCard";

const LoginScreen = ({navigation}) => {
 
  const LoginHandler = () => {
    navigation.navigate('HomeBottomNavigation')
  };
 
  return (
    <View style={styles.container}>
      <RegisterCard button="Continue" onPress={LoginHandler}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "900", fontSize: 32 }}>Karma’ya</Text>{" "}
            hoşgeldin!
          </Text>
          <Text style={styles.description}>Sana nasıl hitap edelim?</Text>
        </View>
        <TextInput placeholder="User Name" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </RegisterCard>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 45,
    marginHorizontal: 16,
    fontSize: 18,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  textContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    color: "white",
    fontWeight: "500",
  },
  description: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    paddingBottom: 8,
  },
});
