import { atom, useAtom } from 'jotai'
import { StyleSheet , FlatList,View} from "react-native";
import HomeItem from "../components/homeItem";
import { DATA } from '../store/store';
import { useState } from 'react';
import LikeModal from '../components/likeModal';

const HomeScreen=()=>{
    const [modalVisible,setModalVisible]=useState(false)
    const [likedItem,setLikedItem]=useState('')
    const [peopleData,setPeopleData]=useAtom(DATA)

    const itemLikesHandler=(username)=>{
        setModalVisible(true);
        setLikedItem(username)
    }

    const renderItem=(itemData)=>{
        const item=itemData.item
        return <HomeItem onPress={()=>itemLikesHandler(item.userName)} imageUrl={item.imageUrl} name={item.userName} date={item.date} />
        
    }
    

    return(
    <View style={styles.container}>
         <LikeModal modalVisible={modalVisible} userName={likedItem} setModalVisible={setModalVisible}/>
        <View style={{alignItems:'center'}}>

        <FlatList 
        data={peopleData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item=>item.userName}
        />
        </View>
     </View>
    )
}

export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        
    }
})