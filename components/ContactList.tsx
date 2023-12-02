import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

const ContactList = () => {
    const contacts=[
        {
            uid:1,
            name:"Bhavani",
            status:'I love Maths',
            imageUrl:'https://avatars.githubusercontent.com/u/54599402?v=4'
        },
        {
            uid:2,
            name:"Bhavani",
            status:'I love coding',
            imageUrl:'https://avatars.githubusercontent.com/u/54599402?v=4'
        },
        {
            uid:3,
            name:"Bhavani",
            status:'I love Physics',
            imageUrl:'https://avatars.githubusercontent.com/u/54599402?v=4'
        },
        {
            uid:4,
            name:"Bhav",
            status:'I love you',
            imageUrl:'https://avatars.githubusercontent.com/u/54599402?v=4'
        }
    ]
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
     {contacts.map(({uid,name,status,imageUrl})=>(
          <View key={uid} style={styles.userCard}>
<Image source={{uri:imageUrl}} style={styles.userImage}/>
<View>
<Text style={styles.userName}>{name}</Text>
<Text style={styles.userStatus}>{status}</Text>
</View>

          </View>
     ))}
      
     
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {paddingHorizontal:16,marginBottom:5},
    heading:{    
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8},
      userCard:{flex:1,flexDirection:"row",alignItems:'center',marginBottom:5,backgroundColor:"#8d3daf",borderRadius:8,padding: 5,},
      userImage:{width:60,height: 60,borderRadius:30,marginRight:14},
      userName:{fontSize:16,fontWeight:'600',color:'white'},
      userStatus:{fontSize:12,color:'white'}
  });
export default ContactList;


