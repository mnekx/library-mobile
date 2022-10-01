import { useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native-web';
import {
  useBooksDispatchContext,
  useBookStateContext,
} from '../../contexts/books/books-context';
import BookItemComp from './BookItemComp';
import { getBooks } from '../../contexts/books/books-actions';
import { useAuthState } from '../../contexts/auth/auth-context';

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
