import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { FlatList } from "react-native";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem key={item.id} product={item} />
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
