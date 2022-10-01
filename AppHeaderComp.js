import { View, Button, StyleSheet } from 'react-native-web';
import { Link, NavLink, useNavigate } from 'react-router-native';
import { useAuthDispatch } from "./contexts/auth/auth-context";
import { logout } from "./contexts/auth/auth-actions";

const AppHeaderComp = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch()
  const handleLogout = async () => {
    await logout(dispatch)
  }
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigate('/users')}
        title='Users'
        color='#841584'
        accessibilityLabel='Users'
      />

      <Button
        onPress={() => navigate('/')}
        title='Books'
        color='#841584'
        accessibilityLabel='List of books'
      />

      <Button
        onPress={() => navigate('/add-user')}
        title='New user'
        color='#841584'
        accessibilityLabel='new user'
      />

      <Button
        onPress={() => navigate('/add-book')}
        title='New Book'
        color='#841584'
        accessibilityLabel='New Book'
      />
      <Button
        onPress={handleLogout}
        title='Logout'
        color='#841584'
        accessibilityLabel='Logout'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: 0,
    zIndex: 1,
  },
});

export default AppHeaderComp;
