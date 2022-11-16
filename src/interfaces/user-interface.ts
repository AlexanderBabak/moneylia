export interface User {
  name: string;
  id: string;
  status: string;
  birthday: string;
  city: string;
  country: string;
  number: string;
  contributions: Contributions[];
}

export interface Contributions {
  paid?: string | null;
  due?: string | null;
  advancePayment: string | null;
  modularity: string | null;
}
