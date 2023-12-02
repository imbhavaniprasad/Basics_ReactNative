import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
<Image source={{
          uri: 'https://wallpapercg.com/media/ts_2x/10605.webp',
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Image 1</Text>
            <Text style={styles.cardLabel}>Label of this image</Text>
            <Text style={styles.cardDescription}>Description of this image is so much but fine it is more than the normal description we see online</Text>
            <Text style={styles.cardFooter}>12 kms away</Text>
        </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
<Image source={{
          uri: 'https://wallpapercg.com/media/ts_2x/10605.webp',
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Image 2</Text>
            <Text style={styles.cardLabel}>Label of this image</Text>
            <Text style={styles.cardDescription}>Description of this image is so much but fine it is more than the normal description we see online</Text>
            <Text style={styles.cardFooter}>12 kms away</Text>
        </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
<Image source={{
          uri: 'https://wallpapercg.com/media/ts_2x/10605.webp',
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Image 3</Text>
            <Text style={styles.cardLabel}>Label of this image</Text>
            <Text style={styles.cardDescription}>Description of this image is so much but fine it is more than the normal description we see online</Text>
            <Text style={styles.cardFooter}>12 kms away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

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
        width:350,
        height:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16
      },
      cardElevated:{
        backgroundColor:'green',
        elevation:3
      },
      cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
      },
      cardTitle:{
  color:'white',
  fontWeight:'bold',
  fontSize:22,
  marginBottom:6
      },
      cardLabel:{ color:'white',
    fontSize:14,
    marginBottom:4
    },
      cardDescription:{ color:'white',fontSize:12,marginBottom:12,marginTop:6},
      cardFooter:{ color:'white'}
      
});
