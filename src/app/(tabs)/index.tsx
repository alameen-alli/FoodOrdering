import ProductListItem from "@/components/ProductListItem";
import products from "@assets/data/products";
import { FlatList, View } from "react-native";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem key={item.id} product={item} />
      )}
    />
  );
}
