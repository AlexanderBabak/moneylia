export interface Payment {
  description: string;
  expiryDate: string;
  sum: string;
  address: {
    code: string;
    street: string;
    postCode: string;
  };
  taxCode: string;
  noticeCode: string;
  id: string;
}
