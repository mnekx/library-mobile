import { View, StyleSheet } from 'react-native-web';
import AppHeaderComp from './AppHeaderComp';
import {Outlet} from 'react-router-native'

const HomeComp = () => {
  return (
    <View style={styles.container}>
      <AppHeaderComp />
      <Outlet/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeComp