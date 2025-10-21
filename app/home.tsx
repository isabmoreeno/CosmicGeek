import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=comics")
      .then((res) => res.json())
      .then((data) => {
        const items = data.items?.slice(0, 5) || []; // pega até 5 livros
        setBooks(items);
      })
      .catch((err) => console.error(err));
  }, []);

  const fixedBooks = [
    {
      id: "1",
      title: "Absolute Batman #1",
      price: "R$ 49,95",
      image:
      "https://m.media-amazon.com/images/I/81zvkA-SRiL._UF894,1000_QL80_.jpg"
  },
    {
      id: "2",
      title: "Duna: Primeiro Livro",
      price: "R$ 60,90",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: "3",
      title: "Os Fabulosos X-Men",
      price: "R$ 143,90",
      image:
        "https://comicboom.com.br/shop/wp-content/uploads/2023/04/5.webp",
    },
  ];

  return (
    <ScrollView style={styles.container}>

       {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={26} color="#2c2a8f" />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")} // sua logo
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>CosmoGeek</Text>
        </View>
        <Ionicons name="cart-outline" size={26} color="#2c2a8f" />
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
  <Ionicons name="search" size={20} color="#747474ff" style={styles.searchIcon} />
  <TextInput
    placeholder="Procure aqui..."
    style={styles.searchInput}
    placeholderTextColor="#666464ff"
  />
</View>

      {/* Banner */}
      <Image
        source={require("../assets/images/banner.png")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Mais vendidos */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mais Vendidos</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Ver todos &gt;</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fixedBooks.map((book) => (
          <View key={book.id} style={styles.card}>
            <Image source={{ uri: book.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle} numberOfLines={2}>
              {book.title}
            </Text>
            <Text style={styles.cardPrice}>{book.price}</Text>
          </View>
        ))}

        {books.map((book) => (
          <View key={book.id} style={styles.card}>
            <Image
              source={{
                uri:
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle} numberOfLines={2}>
              {book.volumeInfo.title}
            </Text>
            <Text style={styles.cardPrice}>R$ 59,90</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2d2d2d",
  },
  searchContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#878787ff",
  borderRadius: 10,
  paddingHorizontal: 15,
  marginTop: 15,
  marginBottom: 15,
},
searchIcon: {
  marginRight: 8,
},
searchInput: {
  flex: 1,
  paddingVertical: 8,
},
  banner: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    marginVertical: 15,
    marginBottom: 40,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 15,
  },
  viewAll: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c2a8f",
    paddingBottom: 14,
  },
  card: {
    width: 120,
    marginRight: 15,
  },
  cardImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c2a8f",
    paddingTop: 5,
  },
});
