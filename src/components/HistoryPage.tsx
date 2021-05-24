import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constants/colors';

import Header from './Header';

const HistoryPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header navigation={navigation} />
        <View style={styles.mainView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 25, color: colors.main, marginRight: 5}}>
              최지민
            </Text>
            <Text style={{fontSize: 25}}>님 처방 내역</Text>
          </View>

          <View style={styles.cardView}>
            <View
              style={{
                width: 80,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={[styles.text, {marginTop: 4}]}>두통</Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{width: '100%', justifyContent: 'flex-start'}}>
                <Text style={styles.text}>2021.09.17 - </Text>
              </View>
              <View style={{width: '100%', paddingLeft: 50}}>
                <Text style={styles.text}>2021.10.18 </Text>
              </View>
              <View style={{width: '100%', marginTop: 5}}>
                <Text style={{color: 'rgb(60,160,40)'}}>약 처방: 타이레놀</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardView}>
            <View
              style={{
                width: 80,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={[styles.text, {marginTop: 4}]}>치통</Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{width: '100%', justifyContent: 'flex-start'}}>
                <Text style={styles.text}>2021.09.17 - </Text>
              </View>
              <View style={{width: '100%', paddingLeft: 50}}>
                <Text style={styles.text}>2021.10.18 </Text>
              </View>
              <View style={{width: '100%', marginTop: 5}}>
                <Text
                  style={{
                    color: 'rgb(60,160,40)',
                  }}>
                  약 처방: 게보린
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.cardView}>
            <View
              style={{
                width: 80,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={[styles.text, {marginTop: 4}]}>생리통</Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{width: '100%', justifyContent: 'flex-start'}}>
                <Text style={styles.text}>2021.09.17 - </Text>
              </View>
              <View style={{width: '100%', paddingLeft: 50}}>
                <Text style={styles.text}>2021.10.18 </Text>
              </View>
              <View style={{width: '100%', marginTop: 5}}>
                <Text style={{color: 'rgb(60,160,40)'}}>약 처방: 그날엔</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HistoryPage;

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
  cardView: {
    width: '100%',
    height: 80,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(120,120,120,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  text: {
    fontSize: 18,
  },
});
