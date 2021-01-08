import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style= {{width: '100%', height: '5%', backgroundColor: '#24305E'}} />
      <View>
      <Text style= {{width: '100%', backgroundColor: '#A8D1E7', paddingTop: 20, paddingBottom: 20}}>
        <Text style = {{fontSize: '40', fontWeight: 'bold'}}>
          Hello World! {"\n"} 
        </Text>
        <Text style = {{ width: '100%', fontSize: '20'}}>
          First React Native App {"\n"}
        </Text>
        This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.
      </Text>

      <Text style = {{ width: '70%', fontSize: 20, fontWeight: 'bold', marginTop: 30}}>
      What would you like to get out of this course?
      </Text>

      <TextInput style = {{ height: 100, width: '75%', backgroundColor: '#F2F2F2'}}
        placeholder="Initial Text"
        multiline
        numberOfLines={4}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style = {{ width: '70%', fontSize: 20, fontWeight: 'bold', marginTop: 25}}>
      An emoji describing how you are feeling about this course:
      </Text>
      <Image style = {{width: 100, height: 100}}
        source = {{uri: 'https://images-na.ssl-images-amazon.com/images/I/715vwvP5ZEL._AC_UL600_SR600,600_.png'}}
      />

      <Button
        title="Submit"
        onPress={()=> console.log(text)}
      />

      </View>




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
