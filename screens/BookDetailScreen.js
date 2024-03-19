import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ActivityIndicator,
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { theme } from "../themes/theme";
import ActionButton from "../components/ActionButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BookCard from "../components/BookCard";

const BookDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const baseURL =
    Platform.OS === "android"
      ? "http://10.0.2.2:3000"
      : "http://localhost:3000";

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
    navigation.navigate("Update Book Info", { bookId: bookId });
  };
  const handleDeleteBook = async () => {
    try {
      await axios.delete(`${baseURL}/books/${bookId}`);
      Alert.alert("Book Deleted", "The book has been deleted successfully.", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Dashboard"),
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
    <SafeAreaView style={styles.container}>
      <BookCard book={book} />
      <View style={styles.buttonRow}>
        <ActionButton
          text="Delete Book"
          onPress={handleDeleteBook}
          customStyle={deleteButtonStyle}
        />
        <ActionButton
          text="Update Book Information"
          onPress={handleUpdateBookButton}
          customStyle={buttonStyle}
        />
      </View>
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

const deleteButtonStyle = {
  button: {
    backgroundColor: theme.colors.error,
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
    margin: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
});
export default BookDetailScreen;
