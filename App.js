import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { Button, Text, Input, ThemeProvider } from '@rneui/base';

const TextInput = () => {
  const [text, onChangeText] = React.useState('New Task');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder= "New Task"
      />
      <Button
        title="Add"
        onPress={() => (onChangeText(text))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

<Stack row align="center" spacing={4}>
  <CheckBox checked title="Do Homework" />
  <CheckBox checked title="Feed Dog" />
  <CheckBox checked title="Go Running" />
  <CheckBox checked title="Call Grandma" />
  
</Stack>

export default function App() {

  let data = [
    {
      key: "1",
      title: "Do Homework"
    },
    {
      key: "2",
      title: "Feed Dog"
    },
    {
      key: "3",
      title: "Go Running"
    },
    {
      key: "4",
      title: "Call Grandma"
    },
  ]

  let renderItem = ({ item }) => {
    return <Text>{item.title}</Text>
  }
  return (<SafeAreaView style={styles.container}>
    <FlatList data={data} renderItem={renderItem}></FlatList>
    </SafeAreaView>)
}

  return (
    <View style={styles.container}>
      <Text>To do: </Text>
      <StatusBar style="auto" />
    </View>
  );


  
  