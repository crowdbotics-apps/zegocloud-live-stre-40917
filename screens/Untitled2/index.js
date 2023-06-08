import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>


      <Text style={{color:'red', fontSize:50, fontWeight:'900',}}>
        Testing screeen!!
      </Text>
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled2;