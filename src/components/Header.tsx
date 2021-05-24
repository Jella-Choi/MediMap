import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Feather';

import {colors} from '../constants/colors';

const Header = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MenuIcon name="menu" color={colors.main} size={30} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>MediMaps</Text>
      <View style={{width: 30}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.main,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: colors.main,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
