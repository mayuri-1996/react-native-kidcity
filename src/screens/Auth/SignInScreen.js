// base components
import React, {useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Input,
  Icon,
  NativeBaseProvider,
  Button,
  Stack,
  Center,
  ScrollView,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// custom components
import ButtonIcon from '../../components/ButtonIcon';

// svg components
import LoginHeaderSvg from '../../assets/loginHeader.svg';
import PhoneIcon from '../../assets/icons/phoneIcon.svg';
import PasswordIcon from '../../assets/icons/passwordIcon.svg';
import EyeIcon from '../../assets/icons/eyeIcon.svg';
import RightArrowIcon from '../../assets/icons/rightArrowIcon.svg';
import LoginFooterSvg from '../../assets/loginFooter.svg';

// stylesheets
import globalStyles from '../../styles/globalStyles';

export const LoginButton = () => {
  const navigation = useNavigation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const Login = () => {
    setIsLoggingIn(isLoggingIn => true);
    setTimeout(() => {
      navigation.navigate('Home');
      setIsLoggingIn(isLoggingIn => false);
    }, 1000);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={Login}>
      <ButtonIcon
        backgroundColor="#ECC94F"
        borderColor="#E0E0E0"
        shadowColor="#171717"
        buttonText="LOG IN"
        icon={
          isLoggingIn ? (
            <ActivityIndicator color="#000" />
          ) : (
            <RightArrowIcon width="15" height="15" />
          )
        }
      />
    </TouchableOpacity>
  );
};

export const GuestButton = () => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <ButtonIcon
        backgroundColor="#F2F2F2"
        borderColor="#B1B2B5"
        buttonText="LOG IN AS GUEST"
        icon={<RightArrowIcon width="15" height="15" />}
      />
    </TouchableOpacity>
  );
};

export const SignUpButton = () => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <ButtonIcon
        backgroundColor="#ECC94F"
        shadowColor="#000"
        buttonText="SIGN UP AS A NEW RETAILER"
        icon={<RightArrowIcon width="15" height="15" />}
      />
    </TouchableOpacity>
  );
};

export const LoginForm = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Stack space={3}>
      <Input
        borderWidth="0"
        borderBottomWidth="1"
        InputLeftElement={
          <Icon as={<PhoneIcon width="15" height="15" />} size={10} ml="2" />
        }
        placeholder="Mobile Number"
        style={globalStyles.formControl}
        isRequired={true}
        keyboardType="numeric"
      />
      <Input
        type={show ? 'text' : 'password'}
        borderWidth="0"
        borderBottomWidth="1"
        InputLeftElement={
          <Icon as={<PasswordIcon width="15" height="15" />} size={10} ml="2" />
        }
        InputRightElement={
          <Button variant="unstyled" mt="2" onPress={handleClick}>
            {<EyeIcon width="15" height="15" />}
          </Button>
        }
        placeholder="Password"
        style={globalStyles.formControl}
        isRequired={true}
      />

      <Button
        variant="unstyled"
        ml="auto"
        py="0"
        _text={{
          color: '#1D2B53',
          fontWeight: 500,
        }}>
        Forgot Password?
      </Button>

      <LoginButton />
    </Stack>
  );
};

const SignInScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View
          style={
            (({
              backgroundColor: isDarkMode ? Colors.white : Colors.white,
            },
            globalStyles.container),
            {paddingBottom: 50})
          }>
          <LoginHeaderSvg width="100%" />
          <Stack space={3} px="3">
            <LoginForm />
            <GuestButton />

            <Center>
              <LoginFooterSvg width="200" />
            </Center>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                textAlign: 'center',
              }}>
              Want to be a Retailer at Kidcity?
            </Text>
            <SignUpButton style={{width: '100%'}} />
          </Stack>
        </View>
      </ScrollView>
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

export default SignInScreen;
