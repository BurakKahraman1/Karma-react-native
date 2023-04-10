import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import RegisterCard from "../components/RegisterCard";
import { useState } from "react";
import { DATA } from "../store/store";
import { useAtom } from "jotai";

const LoginScreen = ({navigation}) => {
  const [userInput,setUserInput]=useState('')
  const [passwordInput,setPasswordInput]=useState('')
 const [founded,setFounded]=useState('none')
 const [peopleData,setPeopleData]=useAtom(DATA)
  
 const LoginHandler = () => {
    let auth= peopleData.some((person)=>{
     return person.userName===userInput && person.password===passwordInput
    })
    if(auth){
      navigation.navigate('HomeBottomNavigation')
    }else{
      setFounded('flex')
    }
  };
 
  return (
    <View style={styles.container}>
      <RegisterCard button="Continue" onPress={LoginHandler} icon={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "900", fontSize: 32 }}>Karma’ya</Text>{" "}
            hoşgeldin!
          </Text>
          <Text style={styles.description}>Sana nasıl hitap edelim?</Text>
        </View>
        <View style={{marginTop:16}}>
        <TextInput onChangeText={(e)=>setUserInput(e)} placeholder="User Name" style={styles.input} />
        <TextInput maxLength={10} onChangeText={(e)=>setPasswordInput(e)} secureTextEntry={true} placeholder="Password" style={[styles.input,{marginTop:2}]} />
        <Text style={[styles.description, {color:'red', display:founded}]}>User not found.</Text>
        </View>
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
    height: 43,
    marginHorizontal: 16,
    fontSize: 18,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    
  },
  textContainer: {
    paddingTop: 20,
    paddingBottom: 10,
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
    paddingBottom: 6,
  },
});
