let country = prompt('Введите страну доставки');
let price;

if (country === '') {
  alert('Не введена страна доставки');
} else if (country === null) {
  alert('Отменено пользователем');
} else {
  country = country.toLowerCase();
}

switch (country) {
  case '':
    break;
  case null:
    break;
  case 'китай':
    price = 100;
    break;
  case 'чили':
    price = 250;
    break;
  case 'австралия':
    price = 170;
    break;
  case 'индия':
    price = 80;
    break;
  case 'ямайка':
    price = 120;
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

if (price > 0) {
  country = country[0].toUpperCase() + country.substring(1);
  console.log(`'Доставка в ${country} будет стоить ${price} кредитов'`);
}
