import { ScrollView, TextInput, Text } from 'react-native-web';
import { useState } from "react";

const AddBookComp = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <ScrollView style={{marginTop: '4rem'}}>
      <Text>Add New Book</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Title'
        onChangeText={(newText) => setTitle(newText)}
        defaultValue={title}
        name='title'
      />
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Author'
        onChangeText={(newText) => setAuthor(newText)}
        defaultValue={author}
        name='author'
      />
    </ScrollView>
  );
};

export default AddBookComp;
