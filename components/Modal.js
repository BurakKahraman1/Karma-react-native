import { StyleSheet,View, Text,Pressable, Modal, Alert } from "react-native"
import { GlobalStyles } from "../constants/style";

const CustomModal=({modalVisible,setModalVisible})=>{

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Hizmetlerimizi kullandığınızda, bilgileriniz açısından bize güvenirsiniz. Bunun büyük bir sorumluluk olduğunu bildiğimizden bilgilerinizi korumak ve bilgilerinizin kontrolünün sizde olmasını sağlamak için büyük çaba harcarız.

Bu Gizlilik Politikası ile hangi verileri neden topladığımızı ve bilgilerinizi nasıl güncelleyebileceğinizi, yönetebileceğinizi, başkalarına aktarabileceğinizi ve silebileceğinizi anlamanıza yardımcı olmayı amaçlıyoruz.
            </Text>
           <View style={{flexDirection:'row',}}>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Kapat</Text>
            </Pressable>
              </View>
          </View>
        </View>
        </Modal> 
    )

}

export default CustomModal;

const styles=StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
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
})