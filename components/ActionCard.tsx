import * as React from 'react';
import { Text, View, StyleSheet,Linking,Image,TouchableOpacity } from 'react-native';


const ActionCard = () => {
    function openWebsite(url:string){
       Linking.openURL(url)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Action Card</Text>
      <View style={[styles.card,styles.cardElevated]}>
           <View style={styles.headingContainer}>
            <Text style={styles.headingText}>
                What's new
            </Text>
           </View>
           <Image source={{uri:'https://wallpapercg.com/media/ts_2x/10605.webp'}} style={styles.cardImage}/>
           <View style={styles.bodyContainer}>
            <Text style={{color:"white"}} numberOfLines={3}>
                cooooooooooooooooooooooooooooooooooooooooooooooooooolll
                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                kkkkklkllnknknknnkkknknkkh
            </Text>
           </View>
           <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://google.com')}>
            <Text style={styles.socialLinks}>
                Read More
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://instagram.com/imbhavaniprasad')}>
            <Text style={styles.socialLinks}>
                Follow Me
            </Text>
            </TouchableOpacity>
           </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {},
  heading:{
    fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
  },
  card:{
    width:350,
    height:360,
    borderRadius:10,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated:{
    backgroundColor:'grey',
    elevation:3
  },
  cardImage:{
    height:180,
    marginBottom:8
  },
  headingContainer:{height:40,flexDirection:"row",justifyContent: 'center',alignItems:"center"},
  headingText:{color:"white",fontSize:16,fontWeight:"600"},
  bodyContainer:{padding: 10},
  footerContainer:{ padding: 8,flexDirection:'row',alignItems:'center',justifyContent: 'space-evenly',},
  socialLinks:{color:"black",backgroundColor:"white",fontWeight:'600',paddingHorizontal: 20,paddingVertical:10,borderRadius:6}
});
