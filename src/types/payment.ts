export interface PaymentSessionResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    checkoutUrl: string;
    sessionId: string;
  };
}