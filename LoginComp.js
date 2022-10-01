import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native-web';
import { loginUser } from './contexts/auth/auth-actions';
import { useAuthDispatch } from './contexts/auth/auth-context';
import { useNavigate, useLocation, Link } from 'react-router-native';

const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errored, setErrored] = useState(false);
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = async () => {
    const data = await loginUser(dispatch, { email, password });
    if (typeof data?._id == 'string' && data._id.length > 0) {
      setErrored(false)
      const origin = location.state?.from?.pathname || '/'
      navigate(origin);
    } else {
      setErrored(true);
    }
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Email'
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
        name='email'
      />
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Password'
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
        name='password'
      />
      <Button title='Login' onPress={handleLogin} />
     {errored && <Text style={{color: 'red'}}>Invalid Credentials!</Text>}
     {/* <View><Text>New User?</Text><Link to='/register'>Sign-up!</Link></View> */}
     <Link to='/register'><Text style={{color: 'blue'}}>New? Sign-up here!</Text></Link>
    </View>
  );
};

export default LoginComp;
