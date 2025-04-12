import { CakeType } from "./order.type";

// バナナケーキ
class BananaCake implements CakeType {
  order(): void {
    console.log("【Factory Method】🍌バナナケーキが注文されました");
  }
}
export class BananaCakeFactory {
  static createCakeInstance(): CakeType {
    return new BananaCake();
  }
}

// チョコレートケーキ
class ChocolateCake implements CakeType {
  order(): void {
    console.log("【Factory Method】🍫チョコレートケーキが注文されました");
  }
}
export class ChocolateCakeFactory {
  static createCakeInstance(): CakeType {
    return new ChocolateCake();
  }
}

// チーズケーキ
class CheeseCake implements CakeType {
  order(): void {
    console.log("【Factory Method】🧀チーズケーキが注文されました");
  }
}
export class CheeseCakeFactory {
  static createCakeInstance(): CakeType {
    return new CheeseCake();
  }
}

// アップルケーキ
class AppleCake implements CakeType {
  order(): void {
    console.log("【Factory Method】🍎アップルケーキが注文されました");
  }
}
export class AppleCakeFactory {
  static createCakeInstance(): CakeType {
    return new AppleCake();
  }
}