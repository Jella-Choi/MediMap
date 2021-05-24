import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchIcon from 'react-native-vector-icons/AntDesign';

import {colors} from '../constants/colors';

import Header from './Header';

const SearchPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header navigation={navigation} />
        <View style={styles.mainView}>
          <Text style={styles.title}>약 사전</Text>
          <Text style={styles.subtitle}>
            내가 먹을 약, 건강하고 안전하게 드세요!
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 40,
              marginBottom: 30,
            }}>
            <TextInput style={styles.textInput} />
            <TouchableOpacity style={styles.searchButton}>
              <SearchIcon name="search1" size={20} color={colors.main} />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 20,
              color: '#666',
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#666',
            }}>
            '이부프로펜' 검색 결과
          </Text>
          <Text style={{lineHeight: 22}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus
            viverra adipiscing at. Enim sit amet venenatis urna cursus eget.
            Pharetra magna ac placerat vestibulum lectus mauris. Tellus
            elementum sagittis vitae et leo duis.
          </Text>

          <View style={styles.dangerousView}>
            <Text style={styles.dangerousText}>
              같이 먹으면 위험한 약: 타이레놀1, 타이레놀2 ...
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchPage;

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
  dangerousView: {
    width: '100%',
    height: 40,
    marginTop: 100,
    justifyContent: 'center',
  },
  dangerousText: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: 'red',
  },
});
