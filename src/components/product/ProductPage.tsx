import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {colors} from '../../constants/colors';

import Header from '../Header';
import ProductCard, {ProductCardType} from './ProductCard';

const ProductPage = ({navigation}) => {
  const [showScrapedList, setShowScrapedList] = React.useState(false);
  const [scrapedList, setScrapedList] = React.useState([]);

  const handleOnClickScrap = async ({
    id,
    title,
    description,
    isScraped,
  }: ProductCardType) => {
    let ScrapedItems =
      JSON.parse(await AsyncStorage.getItem('@product/scraped_items')) ?? {};
    console.log(`ScrapedItems`, ScrapedItems);

    if (isScraped) {
      delete ScrapedItems[id];
    } else {
      ScrapedItems = {...ScrapedItems, [id]: {title, description, isScraped}};
    }

    AsyncStorage.setItem(
      '@product/scraped_items',
      JSON.stringify(ScrapedItems),
    );
  };

  const getScrapedItems = async () => {
    const ScrapedItems =
      JSON.parse(await AsyncStorage.getItem('@product/scraped_items')) ?? {};

    if (Object.keys(ScrapedItems).length === 0) {
      return (
        <View>
          <Text>스크랩한 상품이 없습니다.</Text>
        </View>
      );
    }

    setScrapedList(
      Object.entries(ScrapedItems).map(([id, obj]) => {
        const _obj = obj as ProductCardType;

        const {title, description, isScraped} = _obj;

        return (
          <ProductCard
            key={id}
            id={id}
            title={title}
            description={description}
            isScraped={isScraped}
            onClickScrap={handleOnClickScrap}
          />
        );
      }),
    );

    return null;
  };

  const toggleShowScrapedList = React.useCallback(() => {
    if (!showScrapedList) getScrapedItems();
    setShowScrapedList(!showScrapedList);
  }, [showScrapedList]);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Header navigation={navigation} />
        <View style={styles.mainView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>건강기능 식품</Text>
            <TouchableOpacity onPress={toggleShowScrapedList}>
              <Text style={styles.linkText} textDecoration="underline">
                스크랩 보기
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>나를 위한 건강한 투자</Text>
          {showScrapedList ? (
            scrapedList
          ) : (
            <>
              <ProductCard
                id={'1'}
                title="ㅁㄴㅇㄹ"
                description="지민 방구"
                onClickScrap={handleOnClickScrap}
              />
              <ProductCard
                id={'2'}
                title="마싯다"
                description="마싯는 약"
                onClickScrap={handleOnClickScrap}
              />
              <ProductCard
                id={'3'}
                title="맛없다"
                description="맛없는 약"
                onClickScrap={handleOnClickScrap}
              />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductPage;

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
  cardView: {
    width: '100%',
    height: 100,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(120,120,120,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});
