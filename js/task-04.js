let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let userInput = prompt('Введите количество дроидов которые вы хотите купить');

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  userInput = Number(userInput);
  totalPrice = pricePerDroid * userInput;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `'Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.'`,
    );
  }
}
