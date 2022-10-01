import { useState } from "react";
import { StyleSheet, View, Button, Text } from 'react-native-web';
import {redirect, useNavigate} from 'react-router-native'
import { useAuthState } from "../../contexts/auth/auth-context";
import { deleteBook } from "../../contexts/books/books-actions";
import { useBooksDispatchContext } from "../../contexts/books/books-context";

const BookItemComp = ({ book }) => {
  const navigate = useNavigate()
  const dispatch = useBooksDispatchContext()
  const {token, userDetails} = useAuthState()
  const [error, setError] = useState('')
  const handleEdition = () => {
    navigate('/edit-book/'+book._id)
  }
  const handleDeletion =async () => {
    const deletionResponse = await deleteBook(dispatch, book._id, token, userDetails)
    
    if (deletionResponse?.acknowledged) {
      setError('')
      navigate(-1)
      navigate('/')
    }
    if(deletionResponse?.error?.length > 0) setError(deletionResponse.error.name)
    else setError('!')
  }
  return (
    <View style={styles.item}>
      <Button style={styles.editButton} title={book.title} onPress={handleEdition}/>
      <Button style={styles.deleteButton} color='red' title='Delete' onPress={handleDeletion} />
      {error.length > 0? <Text style={{color: 'red'}}>{error}</Text>: <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    width: '100%',
    dispay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteButton: {
    backgroundColor: 'red',
    flexBasis: '5%',
  },
  editButton: {
    color: 'orange',
    flexBasis: '95%',
  },
});

export default BookItemComp;
