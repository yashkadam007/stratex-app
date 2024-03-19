import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Platform,
} from "react-native";
import axios from "axios";

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
    <View style={styles.container}>
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
      <Button title="Update Book" onPress={handleUpdateBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UpdateBookScreen;
