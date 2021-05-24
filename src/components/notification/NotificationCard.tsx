import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBoxIcon from 'react-native-vector-icons/Fontisto';

import {colors} from '../../constants/colors';

const NotificationCard = ({title, time}: {title: string; time: string}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleIsChecked = React.useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{marginRight: 20, fontSize: 22, fontWeight: 'bold'}}>
          {title}
        </Text>
        <TouchableOpacity onPress={toggleIsChecked}>
          {isChecked ? (
            <CheckBoxIcon
              name="checkbox-active"
              color={colors.main}
              size={30}
            />
          ) : (
            <CheckBoxIcon name="checkbox-passive" color={'#999'} size={30} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 175,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{marginRight: 3, fontSize: 17, fontWeight: 'bold'}}>
          식후 30분
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', paddingRight: 20}}>
          {time}
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
