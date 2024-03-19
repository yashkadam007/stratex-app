import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ActionButton = ({ text, onPress, customStyle }) => {

  return (
    <TouchableOpacity style={[styles.button, customStyle.button]} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={customStyle.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ActionButton;
