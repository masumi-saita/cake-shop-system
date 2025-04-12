// 手数料
interface PaymentCommissionType {
  payCommission(amount: number): void;
}

class PaymentCommission implements PaymentCommissionType{
  payCommission(amount: number): void {
    console.log(`【Strategy】手数料は${amount}円です`);
  }
}
export class PaymentCommissionStrategy {
  static createPaymentCommissionInstance(): PaymentCommissionType {
    return new PaymentCommission();
  }
}