import { View, Text, StyleSheet,Pressable, Modal, Alert } from "react-native";
import CustomButton from "../components/UI/Button";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CustomModal from "../components/Modal";
import { GlobalStyles } from "../constants/style";

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible,setModalVisible]=useState(false)

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };
  const registerHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <LinearGradient colors={["#e4adcb", "#ffffff"]} style={styles.container}>
        <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
       

          <Pressable onPress={()=>setModalVisible(true)}>
        <Text style={styles.description2}>
          Devam ederek{' '}
       
            
            <Text style={[styles.description2,{color: 'blue'}]}>Kullanım Koşullarını ve Gizlilik Politikasını</Text>
            
       
       
         {' '} kabul etmiş sayılırsınız.
          </Text>
          </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    minWidth:80,
    borderRadius: 20,
    padding: 10,
    margin:4,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: GlobalStyles.colors.primary1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:18,
    paddingVertical:20
  },
});
