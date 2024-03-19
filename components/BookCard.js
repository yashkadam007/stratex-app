import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../themes/theme";

const BookCard = ({ book }) => {
  const navigation = useNavigation();
  const handleBookCardPress = () => {
    navigation.navigate("Book Details", { bookId: book.id });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleBookCardPress}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Author: {book.author}</Text>
        <Text style={styles.genre}>Genre: {book.genre}</Text>
        <Text style={styles.year}>Year: {book.year}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondaryT,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: theme.textVariants.l,
    fontFamily: theme.textVariants.semiBold,
    color: theme.colors.secondary,
    marginBottom: 8,
  },
  author: {
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.regular,
    marginBottom: 4,
  },
  genre: {
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.regular,
    marginBottom: 4,
  },
  year: {
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.regular,
  },
});

export default BookCard;
