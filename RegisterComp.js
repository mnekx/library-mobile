import { useState } from "react";
import { View, TextInput, Button, Text } from 'react-native-web';
import { Link } from "react-router-native";

const RegisterComp = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Email'
        onChangeText={(newText) => setMail(newText)}
        defaultValue={mail}
        name='mail'
      />
      <TextInput
        style={{ height: 40 }}
        placeholder='Enter Password'
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
        name='password'
      />
      <Button title='Register'/>
      <Link to='/login'><Text style={{color: 'blue'}}>Login here!</Text></Link>
    </View>
  );
};

export default RegisterComp;
