import React from 'react'
import { SafeAreaView, View, useWindowDimensions, Text, StatusBar } from 'react-native';
import CalculadoraScreen from './src/Screen/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  
  const { width,height }=useWindowDimensions()
  
  return (
    <SafeAreaView style={{width:width, height:height}}>
      <StatusBar
      backgroundColor="black"
      barStyle='light-content'      
      />
      <View style={styles.fondo}>
        <CalculadoraScreen/>
      </View>
    </SafeAreaView>
  )
}

export default App
