import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';
import axios from 'axios';
import { theme } from '../themes/theme';
import ActionButton from '../components/ActionButton';

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleAddBook = async () => {
    try {
      const newBook = {
        title,
        author,
        genre,
        year: parseInt(year),
      };

      const response = await axios.post('http://localhost:3000/books', newBook);
      console.log('New book added:', response.data);
      Alert.alert('Success', 'Book added successfully!');
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error('Error adding book:', error);
      Alert.alert('Error', 'Failed to add book. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <ActionButton
        text="Add Book" 
        onPress={handleAddBook} 
        customStyle={buttonStyle}
        />
    </SafeAreaView>
  );
};

//actionbutton styles
const buttonStyle = {
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginTop: 24,
  },
  buttonText: {
    color: theme.colors.grey00,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.s,
    marginLeft: 10,
    marginRight: 8,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 16,
  },
  input: {
    height: 40,
    borderRadius: 50,
    borderColor: theme.colors.grey300,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default AddBookScreen;