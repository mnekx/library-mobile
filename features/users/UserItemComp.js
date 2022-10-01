import { useState } from "react";
import { StyleSheet, View, Button, Text } from 'react-native-web';
import { useNavigate} from 'react-router-native'
import { useAuthState } from "../../contexts/auth/auth-context";
import { deleteUser } from "../../contexts/users/users-actions";
import { useUsersDispatchContext } from "../../contexts/users/users-context";

const UserItemComp = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useUsersDispatchContext()
  const {token, userDetails} = useAuthState()
  const [error, setError] = useState('')
  const handleEdition = () => {
    navigate('/edit-user/'+user._id)
  }
  const handleDeletion =async () => {
    const deletionResponse = await deleteUser(dispatch, user._id, token, userDetails)
    
    if (deletionResponse?.acknowledged) {
      setError('')
      navigate(-1)
      navigate('/users')
    }
    if(deletionResponse?.error?.length > 0) setError(deletionResponse.error.name)
    else setError('!')
  }
  return (
    <View style={styles.item}>
      <Button style={styles.editButton} title={user.email} onPress={handleEdition}/>
      <Button style={styles.deleteButton} color='red' title='Delete' onPress={handleDeletion} />
      {error?.length > 0? <Text style={{color: 'red'}}>{error}</Text>: <></>}
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
    width: '5%'
  },
  editButton: {
    color: 'orange',
    flexBasis: '95%',
    width: '95%'
  },
});

export default UserItemComp;
