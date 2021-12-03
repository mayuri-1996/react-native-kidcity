import React from 'react';
import {View, Text} from 'react-native';

const ButtonIcon = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: props.backgroundColor,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 6,
        borderColor: props.borderColor,
        borderWidth: props.borderColor ? 2 : 0,
        elevation: props.shadowColor ? 5 : 0,
        shadowColor: props.shadowColor,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }}>
      <Text
        style={{
          color: '#333333',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 14,
          fontFamily: 'Poppins-Regular',
          marginTop: 2,
        }}>
        {props.buttonText}
      </Text>
      {props.icon}
    </View>
  );
};

export default ButtonIcon;
