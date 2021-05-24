import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from 'react-native-vector-icons/AntDesign';

import {colors} from '../constants/colors';
import Header from './Header';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header navigation={navigation} />

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 40,
            marginBottom: 30,
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.searchButton}>
            <SearchIcon name="search1" size={20} color={colors.main} />
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Image
            source={require('../assets/map.png')}
            style={{width: '100%', height: 640}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.main,
    paddingHorizontal: 10,
  },
  searchButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
