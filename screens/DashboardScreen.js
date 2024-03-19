import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  Platform,
} from "react-native";
import ActionButton from "../components/ActionButton";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { theme } from "../themes/theme";
import axios from "axios";
import BookCard from "../components/BookCard";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

function DashboardScreen() {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const navigation = useNavigation();

  const handleAddBookButton = () => {
    navigation.navigate("Add Book");
  };
  const baseURL =
    Platform.OS === "android"
      ? "http://10.0.2.2:3000"
      : "http://localhost:3000";

  useEffect(() => {
    fetchBooks();
  }, []);

  // refetch the book after redirecting to this screen after deleting
  useFocusEffect(
    useCallback(() => {
      fetchBooks();
    }, [])
  );

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${baseURL}/books`);
      setBooks(response.data);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ActionButton
          text="Sign out"
          onPress={() => FIREBASE_AUTH.signOut()}
          customStyle={logoutButtonStyle}
        />
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard book={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchBooks} />
        }
      />
      <ActionButton
        text="Add new book"
        onPress={() => handleAddBookButton()}
        customStyle={buttonStyle}
      />
    </SafeAreaView>
  );
}
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
const logoutButtonStyle = {
  button: {
    backgroundColor: theme.colors.errorT,
    marginTop: 16,
    padding: 4,
  },
  buttonText: {
    color: theme.colors.error,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.s,
    marginLeft: 4,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },
  header: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
export default DashboardScreen;
