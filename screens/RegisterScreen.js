import {
  StyleSheet,
  TextInput,
  View,
  Animated,
  Text,
  Alert,
  Pressable,
  Image,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RegisterCard from "../components/RegisterCard";
import { GlobalStyles } from "../constants/style";
import { useState } from "react";
import CustomModal from "../components/Modal";
import * as ImagePicker from "expo-image-picker";
import { useAtom } from "jotai";
import { DATA } from "../store/store";

const RegisterScreen = ({ navigation }) => {
  const [peopleData, setPeopleData] = useAtom(DATA);
  const [progress, setProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPasswordName, setEnteredPasswordName] = useState("");
  const [checkbox,setCheckbox]=useState(false)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
  };

  const progressLevel = (check, letters, name) => {
    if (check.length >= letters) {
      setProgress((progress) => {
        return progress + 1;
      });
    } else {
      Alert.alert(`Wrong ${name} `, `Must be longer than ${letters} letters`, [
        { text: "Okay", style: "destructive" },
      ]);
    }
  };

  const progressBackLevel = () => {
    if (progress === 0) {
      navigation.goBack();
    } else {
      setProgress((progress) => {
        return progress - 1;
      });
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
    setProgress(0);
  };

  const completeRegister = () => {
    if(checkbox && enteredPasswordName.length>=6){

    
    setPeopleData(() => [
      {
        userName: enteredUserName,
        date: enteredDate,
        password: enteredPasswordName,
        imageUrl: image,
      },
      ...peopleData,
    ]);

    setEnteredUserName("");
    setEnteredDate("");
    setEnteredPasswordName("");
    setImage(null);

    Alert.alert("Kayit Olundu!", "Giris yapabilirsiniz", [
      { text: "Okay", style: "destructive", onPress: navigateToLogin },
    ]);
  }else if(enteredPasswordName<5){
    Alert.alert(`Wrong password `, `Must be longer than 5`, [
      { text: "Okay", style: "destructive" },
    ]);
  }else{
    Alert.alert(`KVKK`, `KVKK must be accepted`, [
      { text: "Okay", style: "destructive" },
    ]);
  }
  };

  let content;
  

  if (progress === 0) {
    content = (
      <RegisterCard
        button="Continue"
        onPress={() => progressLevel(enteredUserName, 5, "User Name")}
        backFunction={progressBackLevel}
        icon={true}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "900", fontSize: 32 }}>Karma’ya</Text>{" "}
            hoşgeldin!
          </Text>
          <Text style={styles.description}>Sana nasıl hitap edelim?</Text>
        </View>
        <TextInput
          value={enteredUserName}
          onChangeText={(enteredUserName) =>
            setEnteredUserName(enteredUserName)
          }
          placeholder="User Name"
          style={styles.input}
          maxLength={15}
        />
      </RegisterCard>
    );
  }
  else if (progress === 1) {
    content = (
      <RegisterCard
        button="Continue"
        onPress={() => progressLevel(enteredDate, 8, "Date")}
        backFunction={progressBackLevel}
        icon={true}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Doğum tarihin nedir?</Text>
        </View>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="01.01.2000"
          style={[styles.input, { marginTop: 50 }]}
          value={enteredDate}
          onChangeText={(enteredDate) => setEnteredDate(enteredDate)}
          maxLength={10}
        />
      </RegisterCard>
    );
  } else if (progress === 2) {
    content = (
      <RegisterCard
        button="Continue"
        onPress={() =>  {

          setProgress((progress) => {
            return progress + 1;
          })
          if(image===null){
            setImage('https://i.pinimg.com/1200x/4d/eb/5b/4deb5bfe9fa9251955aac1a2d88390be.jpg')
          }
 
        }
      }
        backFunction={progressBackLevel}
        icon={true}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bir fotoğraf seçebilir misin?</Text>
          {!image && (
            <Pressable style={[styles.input]} onPress={pickImage}>
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                PICK AN IMAGE
              </Text>
            </Pressable>
          )}
          {image && (
            <View style={styles.image}>
              <Image
                source={{ uri: image }}
                style={{ width: 150, height: 150 }}
              />
            </View>
          )}
        </View>
      </RegisterCard>
    );
  } else if (progress === 3) {
    content = (
      <RegisterCard
        button="Continue"
        icon={true}
        onPress={() =>
            completeRegister()
        }
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            En az 6 karakterden oluşan bir parola girmelisin
          </Text>
        </View>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={[styles.input, { marginTop: 10 }]}
          value={enteredPasswordName}
          onChangeText={(enteredPasswordName) =>
            setEnteredPasswordName(enteredPasswordName)
          }
          maxLength={10}
        />
        <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
          <BouncyCheckbox
            size={25}
            fillColor="#3ad147"
            unfillColor="#FFFFFF"
            onPress={(isChecked) => {
              setCheckbox(isChecked)
            }}
          />
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={{ color: "white", fontSize: 12, padding: 4 }}>
              Kullanım Koşulları, Gizlilik Politikası ve KVKK Metnini okudum
              onaylıyorum.
            </Text>
          </Pressable>
        </View>
      </RegisterCard>
    );
  }

  return (
    <View style={styles.container}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.progressBar}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: GlobalStyles.colors.primary2,
            width: `${(progress / 3) * 100}%`,
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
    height: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomRightRadius: 4,
    borderBottomStartRadius: 4,
  },
  input: {
    backgroundColor: "white",
    height: 43,
    marginHorizontal: 16,
    fontSize: 18,
    marginTop: 32,
    marginBottom: 16,
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
    fontSize: 24,
    paddingHorizontal: 8,
    color: "white",
    fontWeight: "500",
  },
  description: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    paddingBottom: 8,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
