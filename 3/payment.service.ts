import { PaymentCommissionStrategy } from "./payment-commission.service";
import { PaymentType } from "./payment.type";

// PayPay
class PayPay implements PaymentType {
  pay(): void {
    console.log("【Strategy】📱PayPayで支払われました");
  }
}
export class PayPayStrategy {
  static createPaymentInstance(): PaymentType {
    return new PayPay();
  }
}

// クレジットカード
class CreditCard implements PaymentType {
  pay(): void {
    console.log("【Strategy】💳クレジットカードで支払われました");
  }
}
export class CreditCardStrategy {
  static createPaymentInstance(): PaymentType {
    return new CreditCard();
  }
}

// 現金
class Cash implements PaymentType {
  pay(): void {
    console.log("【Strategy】💵現金で支払われました");
  }
}
export class CashStrategy {
  static createPaymentInstance(): PaymentType {
    return new Cash();
  }
}
