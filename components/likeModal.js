import { StyleSheet, View, Text, Pressable, Modal, Alert } from "react-native";
import { GlobalStyles } from "../constants/style";
import { useAtom } from "jotai";
import { DATA, LikeData } from "../store/store";

const LikeModal = ({ modalVisible, setModalVisible, userName }) => {
  const [likedPeople, setLikedPeople] = useAtom(LikeData);
  const [data, setData] = useAtom(DATA);

  const likeHandler = () => {
    const pickedPerson = data.find((person) => person.userName === userName);

    setModalVisible(!modalVisible);
    setLikedPeople((people) => [
        pickedPerson , 
        ...people,
    ]);

  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {userName} kisisine istek atmak istediginize eminmisiniz
          </Text>
          <View style={{}}>
            <Pressable
              onPress={likeHandler}
              style={({ pressed }) => pressed && { opacity: 0.6 }}
            >
              <View
                style={[
                  styles.modalButton,
                  { backgroundColor: GlobalStyles.colors.primary2 },
                ]}
              >
                <Text style={styles.textStyle}>Gonder</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={({ pressed }) => pressed && { opacity: 0.6 }}
            >
              <View
                style={[
                  styles.modalButton,
                  { backgroundColor: GlobalStyles.colors.primary3 },
                ]}
              >
                <Text style={[styles.textStyle, { color: "black" }]}>
                  Vazgec
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LikeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    minWidth: 80,
    borderRadius: 20,
    padding: 10,
    margin: 4,
    elevation: 2,
    width: 200,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 20,
  },
});
