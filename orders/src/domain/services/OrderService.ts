import { Order } from '../models/Order';

export interface OrderService {
  createOrder(total: number, status: 'Paid' | 'Created' | 'Sent'): Promise<Order>;
  listOrders(): Promise<Order[]>;
  updateOrderStatus(orderId: string, status: 'Paid' | 'Created' | 'Sent'): Promise<Order | null>;
}
