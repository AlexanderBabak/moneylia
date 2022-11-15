export type RootStackParamList = {
  JoinScreen: undefined;
  Main: undefined;
  PaymentDetails: { paymentId: string };
};

export type RootTabParamList = {
  Dashboard: undefined;
  Extract: undefined;
  PagoPA: undefined;
  Profile: undefined;
};

export type RootParamList = RootStackParamList | RootTabParamList;
