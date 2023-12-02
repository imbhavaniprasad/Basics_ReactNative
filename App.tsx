import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,useColorScheme, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';


const App = ():JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
    

  );
};
//flex : top - bottom
//align items : cross axis which is left to right here
const styles = StyleSheet.create({
  container:{}
});
export default App;


