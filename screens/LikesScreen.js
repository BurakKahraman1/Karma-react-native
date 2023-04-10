import { useAtom } from "jotai";
import { View, FlatList, StyleSheet, Text} from "react-native";
import { LikeData } from "../store/store";
import HomeItem from "../components/homeItem";


const LikeScreen=()=>{
    const [likedPeople,setLikedPeople]=useAtom(LikeData)

    const renderPeopleItem=(itemData)=>{
        const item=itemData.item
        return <HomeItem imageUrl={item.imageUrl} name={item.userName} date={item.date} />
       
    }
    return(
        <View style={styles.container}>
       <View style={{alignItems:'center'}}>
       {likedPeople.length===0 && <View>
            <Text style={styles.title}>There no one here</Text>
            <Text style={styles.description}>You should go to users screen and like someone.</Text>
            </View>
            }
       <FlatList 
       data={likedPeople}
       renderItem={renderPeopleItem}
       numColumns={2}
       keyExtractor={item=>item.userName}
       />
       </View>
    </View>
    )
}

export default LikeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        
    },
    title:{
        fontSize:22,
        textAlign:'center',
        padding:20,
        fontWeight:'500'
    },
    description:{
        fontSize:18,
        padding:20,
        paddingTop:60
    }
})