import React from 'react';
import {StyleSheet, useColorScheme, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeBaseProvider, ScrollView} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HeaderBar from '../../components/HeaderBar';
import {FlatListSlider} from 'react-native-flatlist-slider';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };
  const images = [
    {
      image:
        'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    },
    {
      image:
        'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    },
  ];
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <ScrollView>
          <HeaderBar />
          <FlatListSlider
            data={images}
            timer={5000}
            indicatorActiveColor="#EB5757"
          />
        </ScrollView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  loginHeader: {
    width: '100%',
  },
  forgetPassword: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

export default HomeScreen;
