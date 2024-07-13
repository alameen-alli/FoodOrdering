import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => id === item.id.toString());

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={product?.image ? { uri: product.image } : defaultPizzaImage}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <View style={styles.size} key={size}>
            <Text style={styles.sizeText}>{size}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  image: { width: "100%", aspectRatio: 1, alignSelf: "center" },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    backgroundColor: "gainsboro",
    aspectRatio: 1,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  price: { fontSize: 18, fontWeight: "bold", marginTop: "auto" },
  subtitle: {
    marginVertical: 10,
    fontWeight: 700,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
});
