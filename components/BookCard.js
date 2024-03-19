import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookCard = ({ book }) => {
  const navigation = useNavigation();
  const handleBookCardPress = () => {
    navigation.navigate('BookDetailScreen', { bookId: book.id });
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    marginBottom: 4,
  },
  genre: {
    fontSize: 16,
    marginBottom: 4,
  },
  year: {
    fontSize: 16,
  },
});

export default BookCard;