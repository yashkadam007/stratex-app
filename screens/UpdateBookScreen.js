import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Platform,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { theme } from "../themes/theme";
import ActionButton from "../components/ActionButton";

const UpdateBookScreen = ({ route, navigation }) => {
  const { bookId } = route.params;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const baseURL =
    Platform.OS === "android"
      ? "http://10.0.2.2:3000"
      : "http://localhost:3000";

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`${baseURL}/books/${bookId}`);
      const book = response.data;
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setYear(book.year.toString());
    } catch (error) {
      console.error("Error fetching book details:", error);
      Alert.alert("Error", "Failed to fetch book details. Please try again.");
    }
  };

  const handleUpdateBook = async () => {
    try {
      const updatedBook = {
        title,
        author,
        genre,
        year: parseInt(year),
      };

      const response = await axios.patch(
        `${baseURL}/books/${bookId}`,
        updatedBook
      );
      console.log("Book updated:", response.data);
      Alert.alert("Success", "Book updated successfully!");
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error("Error updating book:", error);
      Alert.alert("Error", "Failed to update book. Please try again.");
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
        text="Update Book" 
        onPress={handleUpdateBook}
        customStyle={buttonStyle}
      />
    </SafeAreaView>
  );
};
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
    justifyContent: "center",
    margin:16
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

export default UpdateBookScreen;
