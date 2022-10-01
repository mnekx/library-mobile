import { useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native-web';
import {
  useUsersDispatchContext,
  useUsersStateContext,
} from '../../contexts/users/users-context';
import UserItemComp from './UserItemComp';
import { getUsers } from '../../contexts/users/users-actions';
import { useAuthState } from '../../contexts/auth/auth-context';

const UsersComp = () => {
  const dispatch = useUsersDispatchContext();
  const { token } = useAuthState();
  const context = useUsersStateContext()
  useEffect(() => {
    getUsers(dispatch, token);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Users List</Text>
      <FlatList
        data={context?.users}
        renderItem={({ item }) => <UserItemComp user={item} />}
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
export default UsersComp;
