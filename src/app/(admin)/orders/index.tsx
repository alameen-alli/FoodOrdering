import { FlatList } from 'react-native';
import orders from '../../../../assets/data/orders';
import { Stack } from 'expo-router';
import OrderItemListItem from '@/src/components/OrderListItem';

export default function OrdersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Orders' }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderItemListItem order={item} />}
      />
    </>
  );
}