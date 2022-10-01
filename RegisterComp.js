import { useState } from "react";
import { View, TextInput, Button } from 'react-native-web';

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
    </View>
  );
};

export default RegisterComp;
