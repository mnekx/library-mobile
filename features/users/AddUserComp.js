import { useState } from 'react';
import { Button, ScrollView, TextInput, Text } from 'react-native-web';
import { useAuthState } from '../../contexts/auth/auth-context';
import { addUser } from '../../contexts/users/users-actions';
import {
  useUsersDispatchContext,
} from '../../contexts/users/users-context';
import { useNavigate } from 'react-router-native';

const AddUserComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('')
  const [error, setError] = useState('');
  const usersDispatchContext = useUsersDispatchContext();
  const { token, userDetails } = useAuthState();
  const navigate = useNavigate();
 
  const handleSave = async () => {
    const addedUser = await addUser(
      usersDispatchContext,
      {email, password, role},
      token,
      userDetails
    );
    console.log(addedUser)
    if (typeof addedUser?._id === 'string' && addedUser?._id?.length > 0) {
      setError('');
      navigate(-1)
      navigate('/users')
    }
    if (addedUser?.error) setError(addedUser?.error);
  };
  return (
    <>
      <Text style={{marginTop: '2rem'}}>Add User</Text>

      <ScrollView>
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Email'
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
          name='email'
        />
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Role'
          onChangeText={(newText) => setRole(newText)}
          defaultValue={role}
          name='role'
        />
        <TextInput
          style={{ height: 40 }}
          placeholder='Enter Password'
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
          name='password'
        />
        <Button onPress={handleSave} title='Save' />
        
      </ScrollView>
      {error?.length > 0 ? <Text style={{ color: 'red' }}>{error}</Text> : ''}
    </>
  );
};

export default AddUserComp;
