import { StyleSheet, View, Button } from 'react-native-web';
import {useNavigate} from 'react-router-native'

const BookItemComp = ({ book }) => {
  const navigate = useNavigate()
  const handleEdition = () => {
    navigate('/edit-book/'+book._id)
  }
  const handleDeletion = () => {}
  return (
    <View style={styles.item}>
      <Button style={styles.editButton} title={book.title} onPress={handleEdition}/>
      <Button style={styles.deleteButton} title='Delete' onPress={handleDeletion} />
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
    color: 'red',
    flexBasis: '5%',
  },
  editButton: {
    color: 'orange',
    flexBasis: '95%',
  },
});

export default BookItemComp;
