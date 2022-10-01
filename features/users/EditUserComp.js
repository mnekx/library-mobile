import { useEffect, useState } from 'react';
import { Button, ScrollView, TextInput, Text, View } from 'react-native-web';
import { useParams } from 'react-router-native';
import { useAuthState } from '../../contexts/auth/auth-context';
import { editUser } from '../../contexts/users/users-actions';
import {
  useUsersDispatchContext,
  useUsersStateContext,
} from '../../contexts/users/users-context';
import { useNavigate } from 'react-router-native';

const EditUserComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const params = useParams();
  const usersStateContext = useUsersStateContext();
  const usersDispatchContext = useUsersDispatchContext();
  const { token, userDetails } = useAuthState();
  const navigate = useNavigate();
  useEffect(() => {
    const editedUser = usersStateContext.users.filter((user) => {
      return user._id === params['id'];
    })[0];
    setEmail(editedUser.email);
    setRole(editedUser.role)
  }, []);
  const handleSave = async () => {
    const editedUser = await editUser(
      usersDispatchContext,
      {email, password, role},
      params['id'],
      token,
      userDetails
    );
    if (editedUser?.acknowledged) {
      setError('');
      navigate(-1)
      navigate('/users')
    }
    if (editedUser?.error) setError(editedUser?.error);
  };
  return (
    <>
      <Text style={{marginTop: '2rem'}}>Edit -- {email}</Text>

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
          defaultValue={''}
          name='password'
        />
        <Button onPress={handleSave} title='Save' />
        
      </ScrollView>
      {error?.length > 0 ? <Text style={{ color: 'red' }}>{error}</Text> : ''}
    </>
  );
};

export default EditUserComp;
