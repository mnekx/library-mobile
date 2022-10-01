import { useEffect, useState } from 'react';
import { Button, ScrollView, TextInput, Text, View } from 'react-native-web';
import { useParams } from 'react-router-native';
import { useAuthState } from '../../contexts/auth/auth-context';
import { editBook } from '../../contexts/books/books-actions';
import {
  useBooksDispatchContext,
  useBookStateContext,
} from '../../contexts/books/books-context';
import { useNavigate } from 'react-router-native';

const EditBookComp = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const params = useParams();
  const booksStateContext = useBookStateContext();
  const booksDispatchContext = useBooksDispatchContext();
  const { token, userDetails } = useAuthState();
  const navigate = useNavigate();
  useEffect(() => {
    const book = booksStateContext.books.filter((book) => {
      return book._id === params['id'];
    })[0];
    setTitle(book.title);
    setAuthor(book.author);
  }, []);
  const handleSave = async () => {
    const editedBook = await editBook(
      booksDispatchContext,
      {title, author},
      params['id'],
      token,
      userDetails
    );
    if (editedBook?.acknowledged) {
      setError('');
      navigate('/');
    }
    if (editedBook?.error) setError(editedBook?.error);
  };
  return (
    <>
      <Text style={{marginTop: '2rem'}}>Edit -- {title}</Text>

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

export default EditBookComp;
