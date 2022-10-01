import { useState } from 'react';
import { Button, ScrollView, TextInput, Text } from 'react-native-web';
import { useAuthState } from '../../contexts/auth/auth-context';
import { addBook } from '../../contexts/books/books-actions';
import {
  useBooksDispatchContext,
} from '../../contexts/books/books-context';
import { useNavigate } from 'react-router-native';

const AddBookComp = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const booksDispatchContext = useBooksDispatchContext();
  const { token, userDetails } = useAuthState();
  const navigate = useNavigate();
 
  const handleSave = async () => {
    const addedBook = await addBook(
      booksDispatchContext,
      {title, author},
      token,
      userDetails
    );
    console.log(addedBook)
    if (typeof addedBook?._id === 'string' && addedBook?._id?.length > 0) {
      setError('');
      navigate('/');
    }
    if (addedBook?.error) setError(addedBook?.error);
  };
  return (
    <>
      <Text style={{marginTop: '2rem'}}>Add Book</Text>

      <ScrollView>
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
        <Button onPress={handleSave} title='Save' />
        
      </ScrollView>
      {error?.length > 0 ? <Text style={{ color: 'red' }}>{error}</Text> : ''}
    </>
  );
};

export default AddBookComp;
