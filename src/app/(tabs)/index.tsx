import { Image, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";

export default function TabOneScreen() {
  const product = products[0];
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20
  },
  image: {
    width: "100%",
    aspectRatio: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  price: {
    color: Colors.light.tint,
  },
});
