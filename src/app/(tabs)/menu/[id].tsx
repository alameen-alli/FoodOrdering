import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => id === item.id.toString());
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { addItem } = useCart();
  const router = useRouter()

  if (!product) {
    return <Text>Product not found</Text>;
  };

  const AddToCart = () => {
    if (!product) {
      return;
    }

    addItem(product, selectedSize);
    router.push("/cart")
  };

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
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "green" : "grey" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <Button onPress={AddToCart} text="Add to cart"></Button>
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
