import { useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native-web';
import {
  useBooksDispatchContext,
  useBookStateContext,
} from '../../contexts/books/books-context';
import BookItemComp from './BookItemComp';
import { getBooks } from '../../contexts/books/books-actions';
import { useAuthState } from '../../contexts/auth/aut-context';
const books = [
  { title: 'No Longer At Ease', author: 'Chinua Achebe' },
  { title: 'Okonkwo', author: 'Chinua Achebe' },
  { title: 'An Image of Africa', author: 'Chinua Achebe' },
  { title: 'Things Fall Apart', author: 'Ben Okri' },
  { title: 'Arrow of God', author: 'Camara Laye' },
  { title: 'An Image of Africa', author: 'Flora Nwapa' },
  { title: 'Home and Exile', author: 'Cypria Ekwensi' },
  { title: 'The Voter', author: 'Buchi Amecheta' },
  { title: 'Hopes and Impediments', author: 'Nwando Achebe' },
  { title: 'Vengful Creditor', author: 'Chimamanda Ngozi Adichie' },
  { title: 'Things Fall Apart', author: 'Wole Soyinka' },
];

const BooksComp = () => {
  const dispatch = useBooksDispatchContext();
  const { token } = useAuthState();
  const context = useBookStateContext()
  useEffect(() => {
    getBooks(dispatch, token);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Books List</Text>
      <FlatList
        data={context?.books}
        renderItem={({ item }) => <BookItemComp book={item} />}
        style={{ maxHeight: '50vh' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 22,
    marginTop: '2rem',
  },
});
export default BooksComp;
