export interface Order {
    id: string;
    total: number;
    date: Date;
    status: 'Paid' | 'Created' | 'Sent';
  }
  