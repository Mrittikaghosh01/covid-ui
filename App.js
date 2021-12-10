import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/screens/Header';
import Search from './components/screens/Search';
import VerticalScroll from './components/screens/VerticalScroll';
import Guide from './components/screens/Guide';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  // const Stack = createNativeStackNavigator();

  return (

    <ScrollView>
      <View>
        <LinearGradient style={{ height: "100%" }} colors={['#62d0f630', '#62d0f625']}>
          <Header />
          <Search />

          <VerticalScroll />
          <Text style={styles.bannerText1}>Emergency Guide</Text>
          <Guide />
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bannerText1: {
    paddingHorizontal: 20,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 28,
    color: '#666',
    fontWeight: 'bold',

  }
});
