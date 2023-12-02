import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';


const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
<Text>Hello</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
<Text>Hello bro</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
<Text>Hello sis</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
<Text>Hello mom</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
<Text>Hello dad</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card:{
    width:100,
    height:100,
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    margin:5,
    borderRadius:8
  },
  cardElevated:{
    backgroundColor:'#CAD5E3',
   shadowOffset:{
    width:5,
    height:5
   },
   shadowColor:"red"
  }
});
