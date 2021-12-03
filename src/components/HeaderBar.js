import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import HamburgerIcon from '../assets/icons/hamburgarIcon.svg';
import HeartIcon from '../assets/icons/heartIcon.svg';
import NotifyIcon from '../assets/icons/notifyIcon.svg';
import SearchIcon from '../assets/icons/searchIcon.svg';
import Logo from '../assets/logo.svg';

const MyCustomLeftComponent = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <HamburgerIcon style={{flex: 1, alignItems: 'center'}} />
    </TouchableOpacity>
  );
};

const MyCustomCenterComponent = () => {
  return <Logo width="40" style={{flex: 1, alignItems: 'center'}} />;
};

const MyCustomRightComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <HeartIcon width="20" height="20" style={{marginLeft: 12}} />
      <NotifyIcon width="20" height="20" style={{marginLeft: 12}} />
      <SearchIcon width="20" height="20" style={{marginLeft: 12}} />
    </View>
  );
};

const HeaderBar = () => {
  return (
    <Header
      backgroundColor="white"
      containerStyle={{
        paddingTop: 20,
        paddingBottom: 20,
      }}
      statusBarProps={{backgroundColor: '#000'}}>
      <MyCustomLeftComponent />
      <MyCustomCenterComponent />
      <MyCustomRightComponent />
    </Header>
  );
};

export default HeaderBar;
