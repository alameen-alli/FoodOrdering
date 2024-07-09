import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage = {
  uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
};

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={product.image ? { uri: product.image } : defaultPizzaImage}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  price: {
    color: Colors.light.tint,
  },
});

export default ProductListItem;
