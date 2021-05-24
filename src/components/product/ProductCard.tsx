import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PictureIcon from 'react-native-vector-icons/AntDesign';
import HeartIcon from 'react-native-vector-icons/Ionicons';

export interface ProductCardType {
  id: string;
  title: string;
  description: string;
  isScraped?: boolean;
}

interface ProductCardProps extends ProductCardType {
  onClickScrap: ({id, title, description, isScraped}: ProductCardType) => void;
}

const ProductCard = ({
  id,
  title,
  description,
  isScraped,
  onClickScrap,
}: ProductCardProps) => {
  const [isScrapedProduct, setIsScrapedProduct] = React.useState<boolean>(
    isScraped ?? false,
  );

  const toggleIsScraped = () => {
    setIsScrapedProduct(!isScrapedProduct);
  };

  return (
    <View style={styles.cardView}>
      <PictureIcon name="picture" size={80} color="rgb(120,120,120)" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          height: 70,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingTop: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              toggleIsScraped();
              onClickScrap({
                id,
                title,
                description,
                isScraped: isScrapedProduct,
              });
            }}>
            {isScrapedProduct ? (
              <HeartIcon
                name="heart-circle-outline"
                size={40}
                color="rgb(244,110,100)"
              />
            ) : (
              <HeartIcon
                name="heart-circle"
                size={40}
                color="rgba(120,120,120,0.2)"
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{color: 'rgb(120,120,120)', fontSize: 16}}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardView: {
    width: '100%',
    height: 100,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(120,120,120,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
