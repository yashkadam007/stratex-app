import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from '../components/ActionButton';
import { FIREBASE_AUTH } from '../config/FirebaseConfig';
import { theme } from '../themes/theme';

function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActionButton
          text="Sign out"
          onPress={() => FIREBASE_AUTH.signOut()}
          customStyle={logoutButtonStyle}
          
        />
      <Text>Hi from Dashboard Screen</Text>

    </View>
  );
}
const logoutButtonStyle = {
    button: {
      marginTop: 16,
      //flex:0.5,
    },
    buttonText: {
      color: theme.colors.error,
      fontFamily: theme.textVariants.semiBold,
      fontSize: theme.textVariants.s,
      marginLeft: 4,
    },
  };
export default DashboardScreen;