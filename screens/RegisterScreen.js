import {
  StyleSheet,
  TextInput,
  View,
  Animated,
  Text,
  Alert
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RegisterCard from "../components/RegisterCard";
import { GlobalStyles } from "../constants/style";
import { useState } from "react";

const RegisterScreen = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  const progressLevel = () => {
    setProgress((progress) => {
      return progress + 1;
    });
  };

  const navigateToLogin=()=>{
    navigation.navigate('LoginScreen')
    setProgress(0)
  }

  let content;
  
  if(progress === 0){
    content = (
    <RegisterCard button="Continue" onPress={progressLevel}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          <Text style={{ fontWeight: "900", fontSize: 32 }}>Karma’ya</Text>{" "}
          hoşgeldin!
        </Text>
        <Text style={styles.description}>Sana nasıl hitap edelim?</Text>
      </View>
      <TextInput placeholder="User Name" style={styles.input} />
    </RegisterCard>
  )};
  if (progress === 1) {
    content = (
      <RegisterCard button="Continue" onPress={progressLevel}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Doğum tarihin nedir?</Text>
        </View>
        <TextInput placeholder="User Name" style={styles.input} />
      </RegisterCard>
    );
  } else if (progress === 2) {
    content = (
      <RegisterCard button="Continue" onPress={progressLevel}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bir fotoğraf seçebilir misin?</Text>
        </View>
        <TextInput placeholder="User Name" style={styles.input} />
      </RegisterCard>
    );
  } else if (progress === 3) {
    content = (
      <RegisterCard button="Continue" onPress={progressLevel}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bir fotoğraf seçebilir misin?</Text>
        </View>
        <TextInput placeholder="User Name" style={styles.input} />
      </RegisterCard>
    );
  } else if (progress === 4) {
    content = (
      <RegisterCard button="Continue" onPress={()=>{
        Alert.alert(
        "Kayit Olundu!",
        "Giris yapabilirsiniz",
        [{ text: "Okay", style: "destructive", onPress: navigateToLogin }]
      )}}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            En az 6 karakterden oluşan bir parola girmelisin
          </Text>
        </View>
        <TextInput placeholder="Password" style={styles.input} />
        <View style={{flexDirection:'row', padding:10}}>
          <BouncyCheckbox
            size={25}
            fillColor="#3ad147"
            unfillColor="#FFFFFF"
            onPress={(isChecked) => {}}
          />
          <Text style={{color:'white'}}>
            Kullanım Koşulları, Gizlilik Politikası ve KVKK Metnini okudum
            onaylıyorum.
          </Text>
        </View>
      </RegisterCard>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: GlobalStyles.colors.primary2,
            width: `${progress * 25}%`,
            borderBottomRightRadius: 4,
            borderBottomStartRadius: 4,
          }}
        />
      </View>
      {content}
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomRightRadius: 4,
    borderBottomStartRadius: 4,
  },
  input: {
    backgroundColor: "white",
    height: 45,
    marginHorizontal: 16,
    fontSize: 18,
    marginVertical: 32,
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
