import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

function YourApp() {
  const navigation = useNavigation();
  const [joinChannel, setJoinChannel] = useState('');

  const createLive = () => navigation.navigate('LiveScreen', {
    type: 'create',
    channel: uuid()
  });

  const joinLive = () => navigation.navigate('LiveScreen', {
    type: 'join',
    channel: joinChannel
  });

  const inputContainerStyle = { ...styles.joinChannelInput,
    ...styles.input2
  };
  return <View style={styles.container}>
      <Text style={styles.title}>Livestream App</Text>
      <View style={styles.createContainer}>
        <TouchableOpacity style={styles.button} onPress={createLive}>
          <Text style={styles.xlcrwYAK}>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.joinContainer}>
        <TextInput value={joinChannel} onChangeText={setJoinChannel} placeholder="Enter Livestream Id" style={inputContainerStyle} />
        <TouchableOpacity onPress={joinLive} disabled={joinChannel === ''} style={[styles.button, {
        backgroundColor: joinChannel === '' ? '#555555' : '#78b0ff'
      }]}>
          <Text style={[styles.buttonText, styles.FDEDnpVo]}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    color: '#333'
  },
  createContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  joinContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingTop: 50,
    borderTopWidth: 1,
    borderColor: '#22222255'
  },
  joinChannelInput: {
    backgroundColor: '#cccccc77',
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 17,
    textAlign: 'center'
  },
  button: {
    width: '100%',
    marginTop: 15,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#78b0ff'
  },
  buttonText: {
    backgroundColor: 'pink',
    width: 150,
    alignSelf: 'center'
  },
  input2: {
    borderWidth: 3,
    borderColor: 'green'
  },
  xlcrwYAK: {
    fontSize: 26,
    color: "red",
    fontWeight: "700"
  },
  FDEDnpVo: {
    fontWeight: "900",
    color: "blue",
    fontSize: 30
  }
});
export const YourAppModule = {
  name: "YourApp",
  path: "./",
  package: "@modules",
  value: {
    title: "Your App",
    navigator: YourApp
  }
};