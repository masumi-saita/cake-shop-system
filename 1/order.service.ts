import { CakeType } from "./order.type"

export function getCakeOrderMethod(type: CakeType) {
  if (type === 'chocolate') {
    console.log('【Anti Pattern】🍫チョコレートケーキが注文されました')
  } else if (type === 'cheese') {
    console.log('【Anti Pattern】🧀チーズケーキが注文されました')
  } else if (type === 'apple') {
    console.log('【Anti Pattern】🍎アップルケーキが注文されました')
  } else if (type === 'banana') {
    console.log('【Anti Pattern】🍌バナナケーキが注文されました')
  }
}