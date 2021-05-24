import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainPage from './src/components/MainPage';
import DrawerContent from './src/components/DrawerContent';
import SearchPage from './src/components/SearchPage';
import HistoryPage from './src/components/HistoryPage';
import {NotificationPage} from './src/components/notification';
import {ProductPage} from './src/components/product';
import ApplyPage from './src/components/ApplyPage';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={DrawerContent}>
          <Drawer.Screen name="내 주변 약국" component={MainPage} />
          <Drawer.Screen name="약 검색" component={SearchPage} />
          <Drawer.Screen name="처방 내역" component={HistoryPage} />
          <Drawer.Screen name="복용 알림" component={NotificationPage} />
          <Drawer.Screen name="건강 식품" component={ProductPage} />
          <Drawer.Screen name="건강 정보 등록" component={ApplyPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});
