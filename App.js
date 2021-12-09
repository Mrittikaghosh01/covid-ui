import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/screens/Header';
import Search from './components/screens/Search';
import VerticalScroll from './components/screens/VerticalScroll';

export default function App() {
  return (

    <ScrollView>
      <View>
        <LinearGradient colors={['#9e9e9e47', 'transparent']}>
          <Header />
          <Search />
          <VerticalScroll />
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 50,
  },
  search: {
    width: '100%',
    borderRadius: 30,
    borderColor: '#62d0f660',
    borderWidth: 5,
    textAlign: 'center',
    fontSize: 22,
    color: '#ddd',
    paddingVertical: 12
  }
});
