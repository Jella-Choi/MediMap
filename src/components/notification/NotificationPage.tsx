import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBoxIcon from 'react-native-vector-icons/Fontisto';

import {colors} from '../../constants/colors';

import Header from '../Header';
import NotificationCard from './NotificationCard';

const NotificationPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header navigation={navigation} />
        <View style={styles.mainView}>
          <Text style={styles.title}>복용 알림</Text>
          <Text style={styles.subtitle}>
            약 드실 시간을 MediMaps가 알려드려요!
          </Text>

          <NotificationCard title="아침" time="08:00" />
          <NotificationCard title="점심" time="12:00" />
          <NotificationCard title="저녁" time="06:00" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mainView: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5,
  },
  subtitle: {
    color: '#888',
    marginBottom: 10,
  },
});
