import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({navigation}) => {
  const loginHandler = () => {
    navigation.navigate('LoginScreen')
  };
  const registerHandler = () => {
    navigation.navigate('RegisterScreen')
  };


  return (
    <LinearGradient colors={["#e4adcb", "#ffffff"]} style={styles.container}>
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={styles.title}>
            Are you ready to find your soul mate?
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            Doğum haritanda gizlenen sırları keşfet, kadim bilgiye kulak ver!
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          color="primary1"
          onPress={loginHandler}
        >
          Login
        </CustomButton>
        <CustomButton
          style={styles.button}
          color="primary2"
          onPress={registerHandler}
        >
          Register
        </CustomButton>
        <Text style={styles.description2}>
          Devam ederek Kullanım Koşullarımızı ve Gizlilik Politikamızı kabul
          etmiş sayılırsınız.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  descriptionContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    paddingTop: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: 70,
  },
  button: {
    marginVertical: 6,
  },
  description2: {
    fontSize: 14,
    paddingTop: 20,
  },
});
