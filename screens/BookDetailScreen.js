import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ActivityIndicator, Alert, Platform } from "react-native";
import axios from "axios";
import { theme } from "../themes/theme";
import ActionButton from "../components/ActionButton";
import { useNavigation, useFocusEffect } from '@react-navigation/native';


const BookDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
  
  const [book, setBook] = useState(null);
  const { bookId } = route.params;

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);
  
  useFocusEffect(
    useCallback(() => {
      fetchBookDetails();
    }, [])
  );
  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`${baseURL}/books/${bookId}`);
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdateBookButton = () => {
    navigation.navigate('UpdateBookScreen', { bookId: bookId });

  }
  const handleDeleteBook = async () => {
    try {
      await axios.delete(`${baseURL}/books/${bookId}`);
      Alert.alert("Book Deleted", "The book has been deleted successfully.", [
        {
          text: "OK",
          onPress: () => navigation.navigate("DashboardScreen"),
        },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to delete the book. Please try again.");
    }
  };

  if (!book) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  return (
    <View>
      <Text>Book Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Genre: {book.genre}</Text>
      <Text>Year: {book.year}</Text>
      <ActionButton
        text="Delete Book"
        onPress={handleDeleteBook}
        customStyle={buttonStyle}
      />
      <ActionButton
        text="Update Book Information"
        onPress={handleUpdateBookButton}
        customStyle={buttonStyle}
      />
    </View>
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
export default BookDetailScreen;
