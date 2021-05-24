import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

import {colors} from '../constants/colors';

const DrawerContents = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileView}>
        <ProfileIcon
          name="ios-person-circle-outline"
          size={120}
          color={colors.main}
        />
        <Text style={styles.profileNameText}>최지민 님</Text>
      </View>
      <DrawerItemList {...props} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          paddingLeft: 18,
          marginTop: 10,
        }}>
        추천 건강 식품
      </Text>
    </DrawerContentScrollView>
  );
};

export default DrawerContents;

const styles = StyleSheet.create({
  profileView: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  profileNameText: {
    fontSize: 20,
    marginBottom: 20,
  },
});
